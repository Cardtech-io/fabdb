<?php

namespace FabDB\Console\Commands;

use Exception;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\DeckRepository;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class ImportTournamentDecks extends Command
{
    // Total # of decks to import
    private $total = 0;

    // Total decks actually imported
    private $imported = 0;

    /**
     * @var DeckRepository
     */
    private DeckRepository $decks;

    /**
     * @var CardRepository
     */
    private CardRepository $cards;

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
        $this->cards = $cards;
        $this->decks = $decks;

        $path = base_path('resources/scrapers/scrape.js');

        $process = new Process(['node', $path]);
        $process->setTimeout(null);

        $process->start(function($type, $buffer) {
            if (Process::OUT === $type) {
                $deck = json_decode($buffer);

                // Likely an empty buffer line
                if (is_null($deck)) return;

                $this->total++;

                $this->import($deck);
            }
        });

        $process->wait();

        $this->info('# Decks available: '.$this->total);
        $this->info('# Decks imported: '.$this->imported);

        return 0;
    }

    private function import($deck)
    {
        // Some decks have no result, so worth ignoring.
        if (!$deck->details->result) return;

        $this->info('Importing deck: '.$deck->details->decklist);

        $existing = $this->decks->getTournamentDeck($deck->details->decklist);

        // No overwriting existing decks. If we've encountered a deck already, we skip the rest of the import.
        if ($existing) return;

        $heroAge = str_contains('blitz', strtolower($deck->details->format)) ? 'young' : 'adult';
        $heroText = preg_replace('/\([a-z\s]+\)$/i', '', $deck->details->hero);

        // Establish the hero card
        $hero = $this->cards->findHero($heroText, $heroAge);

        if (!$hero) {
            throw new Exception('No hero found for: ' . $heroText);
        }

        $format = str_contains(strtolower($deck->details->format), 'blitz') ? 'blitz' : 'constructed';
        $result= (int) preg_replace('/[a-z]++/', '', $deck->details->result);

        $d = Deck::importTournamentDeck($deck->details, $hero->id, $format, $result);

        $this->decks->save($d);
        $this->decks->setCardTotal($d->id, $hero->id, 1);

        collect($deck->cards)->each(function ($c) use ($d) {
            $card = $this->cards->getIdByIdentifierOrText($c->card);

            if (is_null($card)) return;

            $this->decks->setCardTotal($d->id, $card->id, (int) $c->total);
        });

        $this->imported++;
    }
}
