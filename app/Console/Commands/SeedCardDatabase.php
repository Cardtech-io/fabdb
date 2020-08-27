<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Variant;
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
     * @param CardRepository $cards
     * @return mixed
     * @throws \League\Csv\Exception
     */
    public function handle(CardRepository $cards)
    {
        $set = $this->selectSet();

        $csvFile = Storage::disk('carddb')->getAdapter()->getPathPrefix()."{$set}.csv";
        $csv = Reader::createFromPath($csvFile, 'r');
        $csv->setHeaderOffset(0);
        $rows = $csv->getRecords();

        foreach ($rows as $row) {
            $this->line('Registering: '.$row['Set'].$row['ID']);

            if ($row['Variant of']) {
                $variantOf = $cards->findByIdentifier($row['Variant of']);

                if (!$variantOf) {
                    throw new \Exception('Invalid identifier for variant: ['.$row['Variant of'].']');
                }

                $saved = Card::register(
                    new Identifier($row['Set'], $row['ID']),
                    $variantOf->name,
                    new Rarity($row['Rarity']),
                    $variantOf->text,
                    $variantOf->flavour,
                    $variantOf->comments,
                    $variantOf->keywords,
                    $variantOf->stats
                );

                $this->line('Linking variant: '.$saved->identifier->raw().' to: '.$variantOf->identifier->raw());

                Variant::create(['card_id' => $variantOf->id, 'variant_id' => $saved->id]);
            } else {
                Card::register(
                    new Identifier($row['Set'], $row['ID']),
                    $row['Name'],
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

        if (isset($card[$column]) && $card[$column] != '') {
            $stats[$name] = $card[$column];
        }
    }
}
