<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Finish;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\Printing;
use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Collection\OwnedCard;
use Illuminate\Console\Command;

class MigrateCollectionsToPrintings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:migrate-collections';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Migrates collections to use the new printing card structure.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        OwnedCard::with('card')->chunk(50, function($ownedCards) {
            foreach ($ownedCards as $ownedCard) {
                if ($ownedCard->standard > 0) {
                    $this->migrate($ownedCard, 'standard');
                }
                if ($ownedCard->foil > 0) {
                    $this->migrate($ownedCard, 'foil');
                }
                if ($ownedCard->promo > 0) {
                    $this->migrate($ownedCard, 'promo');
                }
            }
        });

        return 1;
    }

    private function migrate(OwnedCard $ownedCard, string $finish)
    {
        $identifier = Identifier::fromStats($ownedCard->card->name, $ownedCard->card->stats)->raw();
        $card = Card::with('printings')->whereIdentifier($identifier)->first();

        $intendedFinish = $this->intendedFinish($ownedCard, $card, $finish);

//        foreach ($card->printings as $printing) {
//
//        }
    }

    /**
     * Tries to work out what the intended finish from a collection card is. Foil, for example
     * could mean rainbow, cold or gold foil. Gold foil we'll avoid altogether, because hardly anyone has one.
     * If the foil is for an equipment card, it'll be a cold foil. If it's equipment, it'll be cold. If it's fabled,
     * it'll be cold. Everything else will be rainbow.
     *
     * If it's a promo, we'll find a promo that was available prior to unlimited. For example, a promo dawnblade
     * is also identical to a cold foil dawnblade, so we need to watch for those.
     *
     * @param OwnedCard $ownedCard
     * @param Card $foundCard
     * @param string $recordedFinish
     */
    private function intendedFinish(OwnedCard $ownedCard, Card $foundCard, string $recordedFinish)
    {
        $this->info("Looking for printing for card [{$foundCard->identifier->raw()}] with recorded finish [$recordedFinish]");

        switch ($recordedFinish) {
            case 'promo':
                $requiredFinish = 'P';
                break;
            case 'foil':
                $requiredFinish = $foundCard->isEquipment() || $foundCard->isWeapon() || $foundCard->fabled() ? 'cf' : 'rf';
                break;
            default:
                $requiredFinish = $foundCard->legendary() || $foundCard->fabled() ? 'cf' : '';
        }

        $printing = $this->findPrinting($foundCard, $requiredFinish);

        if ($printing) {
            $this->info("Found printing for card [{$foundCard->identifier->raw()}] with sku [{$printing->sku->raw()}]");
        } else {
            $this->warn("No printing found for card [{$foundCard->identifier->raw()}] with required finish [$requiredFinish]");
        }

//        if ($ownedCard->card->rarity->is(new Rarity('F')));
    }

    private function findPrinting(Card $foundCard, string $requiredFinish): ?Printing
    {
        return $foundCard->printings->first(function ($printing) use ($requiredFinish) {
            // promo, just grab by rarity
            if ($requiredFinish === 'P') {
                return !$printing->sku->unlimited() && $printing->rarity->equals(new Rarity('P'));
            }

            return !$printing->sku->unlimited() && $printing->sku->finish()->equals(Finish::fromString($requiredFinish));
        });
    }
}
