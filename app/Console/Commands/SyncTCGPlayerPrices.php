<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardPrice;
use FabDB\Domain\Cards\CardPriceRepository;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Market\PriceAverage;
use FabDB\Domain\Market\PriceAveragesRepository;
use FabDB\Library\TCGPlayer\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class SyncTCGPlayerPrices extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:sync-tcg-player {--products} {--prices} {--all}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync prices from TCG Player for all cards.';

    private Client $client;
    private CardPriceRepository $cardPrices;
    private CardRepository $cards;

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(Client $client, CardPriceRepository $cardPrices, CardRepository $cards)
    {
        $this->cards = $cards;
        $this->cardPrices = $cardPrices;
        $this->client = $client;

        if ($this->noValidOptions()) {
            $this->error('No options provided. Valid options: --products, --prices, --all');
        }

        $client->authToken();

        if ($this->option('products') || $this->option('all')) {
            $this->syncProducts();
        }

        if ($this->option('prices') || $this->option('all')) {
            $this->syncPrices();
        }

        return 0;
    }

    private function syncProducts()
    {
        $cards = $this->cards->all(['cardPrices' => function($query) {
            $query->whereSource('tcgplayer');
        }])->keyBy('identifier');

        $cardPrices = [];
        foreach ($this->client->products() as $product) {
            $tcgPlayerId = $product->productId;
            $identifier = Str::slug($product->name);

            $card = Arr::get($cards, $identifier);

            if (!$card) {
                // Now we try and find a card that -looks- like it
                $card = $cards->where(function(Card $card) use ($product) {
                    similar_text($product->cleanName, $card->name, $percent);

                    return $percent > 75;
                })->first();
            }

            if (!$card) {
                $this->info('I could not find a matching card for: '.$product->cleanName);
                continue;
            }

            if (!$card->cardPrices->empty()) continue;


            $cardPrices[] = [
                'card_id' => $card->id,
                'source' => 'tcgplayer',
                'source_id' => $tcgPlayerId,
                'source_link' => $product->url,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        $this->cardPrices->createMany($cardPrices);
    }

    private function noValidOptions(): bool
    {
        return !count(array_filter(
            array_filter(
                $this->options(),
                fn($key) => in_array($key, ['products', 'prices', 'all']),
                ARRAY_FILTER_USE_KEY
            )
        ));
    }

    /**
     * Sync prices from TCG Player to the card database.
     */
    private function syncPrices(): void
    {
        $cardPrices = $this->cardPrices->forSource('tcgplayer');
        $productIds = $cardPrices->pluck('source_id')->toArray();

        $products = [];

        // this is a little tricky. We want to find the lowest value of low price/market price across a range of products which share a product id,
        // due to cold foil, rainbow foil, standard foiling.etc. So, we only really care about the low price/market price (market preferred). So we
        // do a first pass, get the lowest of both, and then return the lowest market value if possible.
        foreach ($this->client->productPrices($productIds) as $product) {
            if (is_numeric($product->lowPrice) && $product->lowPrice < Arr::get($products, "$product->productId.lowPrice", 100000)) {
                Arr::set($products, "$product->productId.lowPrice", $product->lowPrice);
            }

            if (is_numeric($product->marketPrice) && $product->marketPrice < Arr::get($products, "$product->productId.marketPrice", 100000)) {
                Arr::set($products, "$product->productId.marketPrice", $product->marketPrice);
            }
        }

        foreach ($products as $productId => $prices) {
            $price = $prices['marketPrice'] ?? $prices['lowPrice'];

            $cardPrice = $cardPrices[$productId];
            $cardPrice->price = $price * 100;
            $cardPrice->save();
        }
    }
}
