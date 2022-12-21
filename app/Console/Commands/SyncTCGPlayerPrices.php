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
    protected $signature = 'fabdb:sync-tcg-player {--products} {--prices} {--summarise} {--all} {--skip-cache}';

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

        if ($this->option('summarise') || $this->option('all')) {
            $this->summarisePrices();
        }

        return 0;
    }

    private function syncProducts()
    {
        $cards = $this->cards->all(['cardPrices' => function($query) {
            $query->whereSource('tcgplayer');
        }])->keyBy('identifier');

        $cardPrices = [];
        $products = $this->getProducts();

        foreach ($products as $product) {
            $card = null;
            $tcgPlayerId = $product->productId;
            $name = $this->stripWords($product->name);
            $identifier = Str::slug($name);

            // The card can be matched based on printing sku
            if (preg_match('/([a-z]{3}[0-9]{3})/i', $name, $matches)) {
                $card = $this->cards->getByPrintingSku($matches[1]);
            }

            if (!$card) {
                $card = Arr::get($cards, $identifier);
            }

            if (!$card) {
                // Now we try and find a card that -looks- like it
                $card = $cards->where(function(Card $card) use ($product, $name) {
                    similar_text($name, strtolower($card->name), $percent);

                    return $percent > 75;
                })->first();
            }

            if (!$card) {
                $this->warn('I could not find a matching card for: '.$name);
                continue;
            }

            if (!$card->cardPrices->empty()) continue;

            $this->info('Match found for: '.$name.' as ['.$card->name.']');

            $cardPrices[] = [
                'card_id' => $card->id,
                'source' => 'tcgplayer',
                'source_id' => $tcgPlayerId,
                'source_link' => $product->url,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        $this->info('Matched '.count($cardPrices).' out of '.count($products).' products.');
        $this->info('Creating '.count($cardPrices).' card price records...');

        $this->cardPrices->createMany($cardPrices);

        $this->info('Done.');
    }

    private function noValidOptions(): bool
    {
        return !count(array_filter(
            array_filter(
                $this->options(),
                fn($key) => in_array($key, ['products', 'prices', 'summarise', 'all']),
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
            $this->info("Determining price for {$product->productId}...");

            if (is_numeric($product->lowPrice) || is_numeric($product->marketPrice)) {
                Arr::set($products, "$product->productId.description", $product->subTypeName);
            }

            if (is_numeric($product->lowPrice) && $product->lowPrice < Arr::get($products, "$product->productId.lowPrice", 100000)) {
                Arr::set($products, "$product->productId.lowPrice", $product->lowPrice);
            }

            if (is_numeric($product->marketPrice) && $product->marketPrice < Arr::get($products, "$product->productId.marketPrice", 100000)) {
                Arr::set($products, "$product->productId.marketPrice", $product->marketPrice);
            }
        }

        foreach ($products as $productId => $prices) {
            $this->info("Updating price for {$productId}...");

            $price = $prices['marketPrice'] ?? $prices['lowPrice'];

            $cardPrice = $cardPrices[$productId];
            $cardPrice->price = $price * 100;
            $cardPrice->save();
        }
    }

    private function summarisePrices()
    {
        $cards = $this->cards->aggregatePrices();

        foreach ($cards as $card) {
            $this->info('Aggregating price for '.$card->name.'...');

            $cardPrice = $card->cardPrices->sortBy('price')->first();

            if (!$cardPrice) {
                $this->warn('No card price found.');
                continue;
            }

            $card->lastPrice = $card->price;
            $card->price = $cardPrice->price;
            $card->priceId = $cardPrice->id;
            $card->save();
        }

        $this->info('Done.');
    }

    /**
     * @return array
     */
    private function getProducts(): array
    {
        $products = cache('tcgplayer.products', []);

        if ($this->option('skip-cache') && $products) return $products;

        foreach ($this->client->products() as $product) {
            $products[] = $product;
        }

        cache()->put('tcgplayer.products', $products, 60 * 60 * 24);

        return $products;
    }

    private function stripWords($name): string
    {
        $words = ['marvel', 'extended art', 'alternate art', 'cold foil', 'golden', 'placeholder card'];

        return str_replace($words, '', strtolower($name));
    }
}
