<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Library\TCGPlayer\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class SyncTCGPlayerPrices extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:sync-tcg-player';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync prices from TCG Player for all cards.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(Client $client)
    {
//        foreach ($client->products() as $product) {
//            $tcgplayerId = $product->productId;
//            $productIds[] = $product->productId;
//
//            $identifier = Str::slug($product->name);
//
//            $card = Card::whereIdentifier($identifier)->first();
//
//            if ($card) {
//                $card->tcgplayerId = $tcgplayerId;
//                $card->save();
//            }
//        }

        $productIds = Card::select('tcgplayer_id')
            ->whereNotNull('tcgplayer_id')
            ->limit(100)
            ->pluck('tcgplayer_id')
            ->toArray();

        foreach ($client->productPrices($productIds) as $product) {
            dd($product);
        }

        return 0;
    }
}
