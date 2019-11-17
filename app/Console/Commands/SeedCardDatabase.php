<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\Rarity;
use Illuminate\Console\Command;
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
        // Resets the database back to zero. This is useful for re-seeding if there are records in the database (such
        // as for collections, decks.etc. that have already been saved. This ensures that the cards will be re-seeded
        // with updated information but utilising the same IDs.
        DB::statement('TRUNCATE cards');
        DB::statement('ALTER TABLE cards AUTO_INCREMENT = 1;');

        $cards = json_decode(Storage::disk('carddb')->get('wtr.json'), true);

        foreach ($cards as $card) {
            Card::register(
                new Identifier($card['set'], $card['id']),
                $card['name'],
                new Rarity($card['rarity']),
                $card['text'],
                $card['keywords'],
                $card['stats']
            );
        }
    }
}
