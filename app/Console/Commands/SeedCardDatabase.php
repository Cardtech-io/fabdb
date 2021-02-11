<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\Rarity;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use League\Csv\Reader;

class SeedCardDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:seed {--all}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seeds the database with the cards found in storage/carddb/*.json';

    /**
     * Execute the console command.
     *
     * @param CardRepository $cards
     * @return mixed
     * @throws \League\Csv\Exception
     */
    public function handle(CardRepository $cards)
    {
        if (!$this->option('all')) {
            $sets = [$this->selectSet()];
        } else {
            $sets = ['arc', 'cru', 'wtr'];
        }

        foreach ($sets as $set) {
            $csvFile = Storage::disk('carddb')->getAdapter()->getPathPrefix() . "{$set}.csv";
            $csv = Reader::createFromPath($csvFile, 'r');
            $csv->setHeaderOffset(0);
            $rows = $csv->getRecords();

            foreach ($rows as $row) {
                $this->line('Registering: ' . $row['Name'] . $row['ID']);

                Card::register(
                    $this->identifier($row),
                    $row['Name'],
                    '',
                    new Rarity($row['Rarity']),
                    $row['Text'],
                    Arr::get($row, 'Flavour'),
                    Arr::get($row, 'Comments'),
                    explode(',', $row['Keywords']),
                    $this->compileStats($row)
                );
            }
        }

        $this->info('Done.');
    }

    /**
     * @return string
     */
    private function selectSet(): string
    {
        $availableSets = array_keys(config('game.sets'));
        $set = $this->choice('Which set would you like to import or update?', $availableSets);

        return $set;
    }

    private function compileStats($row)
    {
        $stats = [];

        $this->stat($stats, $row, 'life');
        $this->stat($stats, $row, 'intellect');
        $this->stat($stats, $row, 'resource');
        $this->stat($stats, $row, 'cost');
        $this->stat($stats, $row, 'defense');
        $this->stat($stats, $row, 'attack');

        return $stats;
    }

    private function stat(&$stats, $card, $name)
    {
        $column = ucfirst($name);

        if (isset($card[$column]) && $card[$column] != '') {
            $stats[$name] = $card[$column];
        }
    }
    
    private function identifier(array $row)
    {
        return Identifier::generate($row['Name'], $this->compileStats($row));
    }
}
