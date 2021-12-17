<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\DeckRepository;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Storage;

class ImportTournamentDecks extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:import-tournament-decks';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Imports all tournament decks that were previously scraped by the LSS deck scraper, providing the JSON in the carddb location.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(CardRepository $cards, DeckRepository $decks)
    {
        $tournamentDecks = json_decode(Storage::disk('carddb')->get('tournament-decks.json'));

        // Loop through each deck, map their listed cards to actual card ids, then register those decks
        foreach ($tournamentDecks as $deck) {
            $this->info('Importing deck: '.$deck->details->decklist);

            $existing = $decks->getTournamentDeck($deck->details->decklist);

            // No overwriting existing decks. If we've encountered a deck already, we skip the rest of the import.
            if ($existing) continue;

            $heroAge = str_contains('blitz', strtolower($deck->details->format)) ? 'young' : 'adult';
            $heroText = preg_replace('/\([a-z\s]+\)$/i', '', $deck->details->hero);

            // Establish the hero card
            $hero = $cards->findHero($heroText, $heroAge);

            if (!$hero) {
                throw new Exception('No hero found for: ' . $heroText);
            }

            if (!$deck->details->result) continue;

            $format = str_contains(strtolower($deck->details->format), 'blitz') ? 'blitz' : 'constructed';
            $result= (int) preg_replace('/[a-z]++/', '', $deck->details->result);

            $d = Deck::importTournamentDeck($deck->details, $format, $result);

            $decks->save($d);
            $decks->setCardTotal($d->id, $hero->id, 1);

            collect($deck->cards)->each(function ($c) use ($cards, $d, $decks) {
                $card = $cards->getIdByIdentifierOrText($c->card);

                if (is_null($card)) return;

                $decks->setCardTotal($d->id, $card->id, (int) $c->total);
            });
        }

        return 0;
    }
}
