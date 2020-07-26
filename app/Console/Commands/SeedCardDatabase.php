<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\Rarity;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use League\Csv\Reader;

class SeedCardDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:seed';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seeds the database with the cards found in storage/carddb/*.json';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $set = $this->selectSet();

        $csvFile = Storage::disk('carddb')->getAdapter()->getPathPrefix()."{$set}.csv";
        $csv = Reader::createFromPath($csvFile, 'r');
        $csv->setHeaderOffset(0);
        $cards = $csv->getRecords();

        foreach ($cards as $card) {
            $this->line('Registering: '.$card['Set'].$card['ID']);

            Card::register(
                new Identifier($card['Set'], $card['ID']),
                $card['Name'],
                new Rarity($card['Rarity']),
                $card['Text'],
                Arr::get($card, 'Flavour'),
                Arr::get($card, 'Comments'),
                explode(',', $card['Keywords']),
                $this->compileStats($card)
            );
        }

        $this->info('Done.');
    }

    /**
     * @return string
     */
    private function selectSet(): string
    {
        $set = $this->choice('Which set would you like to import or update?', ['ARC', 'IRA', 'WTR']);

        return strtolower($set);
    }

    private function compileStats($card)
    {
        $stats = [];

        $this->stat($stats, $card, 'life');
        $this->stat($stats, $card, 'intellect');
        $this->stat($stats, $card, 'resource');
        $this->stat($stats, $card, 'cost');
        $this->stat($stats, $card, 'defense');
        $this->stat($stats, $card, 'attack');

        return $stats;
    }

    private function stat(&$stats, $card, $name)
    {
        $column = ucfirst($name);

        if (isset($card[$column])) {
            $stats[$name] = $card[$column];
        }
    }
}
