<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Finish;
use FabDB\Domain\Cards\Identifier;
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
                $this->migrate($ownedCard, 'standard');
            }
        });

        return 1;
    }

    private function migrate(OwnedCard $ownedCard, string $finish)
    {
        if ($finish === 'standard') {
            $finish = 'regular';
        }

        $finish = Finish::fromString($finish);

        $identifier = Identifier::fromStats($ownedCard->card->name, $ownedCard->card->stats)->raw();
        $card = Card::with('printings')->whereIdentifier($identifier)->first();

        foreach ($card->printings as $printing) {

        }
    }
}
