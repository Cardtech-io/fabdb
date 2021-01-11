<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Finish;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\Printing;
use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Collection\OwnedCard;
use FabDB\Domain\Users\User;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;

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
        OwnedCard::with('card', 'user')->chunk(50, function($ownedCards) {
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
    }
    
    /**
     * Determines whether the collection should be migrated to alpha/first or unlimited. Returns the method to be
     * called based on the migration requirement.
     *
     * @param User $user
     */
    private function migrateTo(User $user): string
    {
        if ($user->clarification) {
            return $user->clarification;
        }

        return $user->createdAt->lt(new \Carbon\Carbon('1st November 2020')) ? 'first' : 'unlimited';
    }

    private function migrate(OwnedCard $ownedCard, string $finish)
    {
        $identifier = Identifier::generate($ownedCard->card->name, $ownedCard->card->stats)->raw();

        $this->info("Looking for card with identifier [$identifier]");

        $card = Card::with('printings')->whereIdentifier($identifier)->first();

        $printing = $this->printing($ownedCard, $card, $finish);

        if (!$printing) {
            $this->error("No printing found for identifier [$identifier]");
            return;
        }

        OwnedCard::add($ownedCard->userId, $card->id, $printing->id, $ownedCard->$finish, false, false);
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
    private function printing(OwnedCard $ownedCard, Card $foundCard, string $recordedFinish)
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

        $printing = $this->findPrinting($ownedCard, $foundCard, $requiredFinish);

        if (!$printing) {
            $this->warn("No printing found for card [{$foundCard->identifier->raw()}] with required finish [$requiredFinish]");
            return false;
        }

        $this->info("Found printing for card [{$foundCard->identifier->raw()}] with sku [{$printing->sku->raw()}]");

        return $printing;
    }

    private function findPrinting(OwnedCard $ownedCard, Card $foundCard, string $requiredFinish): ?Printing
    {
        $method = $method = $this->migrateTo($ownedCard->user);

        $found = $this->locatePrinting($foundCard, $ownedCard, $requiredFinish, $method);

        // we couldn't find a printing fort the required edition, let's flip the script and try with the other.
        if (!$found) {
            $found = $this->locatePrinting($foundCard, $ownedCard, $requiredFinish, $method == 'first' ? 'unlimited' : 'first');
        }

        if (!$found) {
            $this->info("Logical error for card [{$foundCard->identifier->raw()}] and required finish [$requiredFinish]");
        }

        return $found;
    }

    /**
     * @param Card $foundCard
     * @param OwnedCard $ownedCard
     * @param string $requiredFinish
     * @param string $method
     * @return mixed
     */
    private function locatePrinting(Card $foundCard, OwnedCard $ownedCard, string $requiredFinish, string $method)
    {
        return $foundCard->printings->first(function ($printing) use ($foundCard, $ownedCard, $requiredFinish, $method) {
            // promo, just grab by rarity
            if ($requiredFinish === 'P') {
                return $printing->rarity->equals(new Rarity('P'));
            }

            // It can only be a first edition
            if ($requiredFinish === 'cf') {
                return $printing->sku->first() && $printing->sku->finish()->equals(Finish::fromString($requiredFinish));
            }

            return (
                ($printing->sku->$method() || $printing->edition->none()) &&
                $printing->sku->finish()->equals(Finish::fromString($requiredFinish))
            );
        });
    }
}
