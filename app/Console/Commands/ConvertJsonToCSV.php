<?php
namespace FabDB\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use League\Csv\Writer;

class ConvertJsonToCSV extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:convert-json';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Converts existing JSON card data into CSV format for faster turnarounds when required.';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $set = $this->selectSet();

        $disk = Storage::disk('carddb');

        $csvFile = $disk->getAdapter()->getPathPrefix()."{$set}.csv";

        $csv = Writer::createFromPath($csvFile, 'w');
        $csv->insertOne([
            'Set',
            'ID',
            'Name',
            'Rarity',
            'Text',
            'Flavour',
            'Keywords',
            'Life',
            'Intellect',
            'Resource',
            'Cost',
            'Defense',
            'Attack'
        ]);

        $cards = json_decode($disk->get("{$set}.json"), true);
        
        foreach ($cards as $card) {
            $this->info('Inserting '.$card['set'].$card['id']);
            
            $payload = [
                $card['set'],
                $card['id'],
                $card['name'],
                $card['rarity'],
                $card['text'],
                Arr::get($card, 'flavour', ''),
                implode(',', Arr::get($card, 'keywords')),
                Arr::get($card, 'stats.life'),
                Arr::get($card, 'stats.intellect'),
                Arr::get($card, 'stats.resource'),
                Arr::get($card, 'stats.cost'),
                Arr::get($card, 'stats.defense'),
                Arr::get($card, 'stats.attack')
            ];

            $csv->insertOne($payload);
        }

        $this->info('Done.');
    }

    /**
     * @return string
     */
    private function selectSet(): string
    {
        $set = $this->choice('Which set would you like to convert?', ['ARC', 'IRA', 'WTR']);

        return strtolower($set);
    }
}
