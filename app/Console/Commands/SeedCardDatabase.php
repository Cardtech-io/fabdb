<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\Rarity;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

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
    protected $description = 'Seeds the database with the cards found in storage/carddb/wtr.json';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $set = $this->selectSet();

        $cards = json_decode(Storage::disk('carddb')->get("{$set}.json"), true);

        foreach ($cards as $card) {
            $this->line('Registering: '.$card['set'].$card['id']);

            Card::register(
                new Identifier($card['set'], $card['id']),
                $card['name'],
                new Rarity($card['rarity']),
                $card['text'],
                Arr::get($card, 'flavour'),
                $card['keywords'],
                Arr::get($card, 'stats', [])
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
}
