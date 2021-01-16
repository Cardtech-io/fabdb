<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Decks\Deck;
use Illuminate\Console\Command;

class MigrateDecks extends Command
{
    private $cardsUpdates = 0;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:migrate-decks';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Migrates deck cards to cards that have the correct slug.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Deck::with('cards')->chunk(50, function($decks) {
            foreach ($decks as $deck) {
                foreach ($deck->cards as $card) {
                    if (preg_match('/^[A-Z]{3}[0-9]{3}$/i', $card->identifier->raw())) {
                        // this is an old format card, and needs to be migrated
                        $newCard = $this->findCard($card);

                        $this->info("Updating card with card [{$card->id}] to [{$newCard->id}]");

                        $this->cardsUpdates++;

                        $this->savePivot($newCard, $card);
                    }
                }
            }
        });

        $this->info("$this->cardsUpdates records updated.");

        return 0;
    }

    /**
     * @param $card
     * @return mixed
     */
    private function findCard($card)
    {
        $newIdentifier = Identifier::generate($card->name, $card->stats);

        return Card::whereIdentifier($newIdentifier)->first();
    }

    /**
     * @param $newCard
     * @param $card
     */
    private function savePivot($newCard, $card): void
    {
        $card->pivot->card_id = $newCard->id;
        $card->pivot->save();
    }
}
