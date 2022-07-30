<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Market\PriceAverage;
use FabDB\Domain\Market\PriceAveragesRepository;
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
    protected $signature = 'fabdb:sync-tcg-player {--products} {--prices} {--all}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync prices from TCG Player for all cards.';

    private PriceAveragesRepository $priceAverages;
    private Client $client;

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(Client $client, PriceAveragesRepository $priceAverages)
    {
        $this->priceAverages = $priceAverages;
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

    private function syncProducts(): array
    {
        foreach ($this->client->products() as $product) {
            $tcgPlayerId = $product->productId;
            $identifier = Str::slug($product->name);

            if (str_contains($product->name, 'Teklo Foundry Heart')) {
                print_r($product);
            }
            $card = Card::whereIdentifier($identifier)->first();

            if ($card) {
                $card->tcgplayerId = $tcgPlayerId;
                $card->save();
            }
        }
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
        $cards = Card::select('id', 'tcgplayer_id')
            ->whereNotNull('tcgplayer_id')
            ->get()
            ->keyBy('tcgplayer_id');

//        $productIds = $cards->pluck('tcgplayer_id')->toArray();
        $productIds = [225539, 270939];

        // Used to store the product id groupings and to find min/max prices
        $products = [];

        foreach ($this->client->productPrices($productIds) as $product) {
            print_r($product);
//            // Now we find the printing
//            if (!isset($products[$product->productId])) {
//                $products[$product->productId] = [
//                    'low' => $product->lowPrice,
//                    'mid' => $product->midPrice,
//                    'high' => $product->highPrice
//                ];
//            } else {
//                $products[$product->productId]['low'] = $product->lowPrice !== null && $products[$product->productId]['low'] !== null ? min($product->lowPrice, $products[$product->productId]['low']) : $products[$product->productId]['low'];
//                $products[$product->productId]['mid'] = ($product->midPrice + $products[$product->productId]['mid']) / 2;
//                $products[$product->productId]['high'] = max($product->highPrice, $products[$product->productId]['high']);
//            }
        }
        dd();

        foreach ($products as $productId => $prices) {
            if (!($prices['low'] && $prices['high'])) continue;

            $priceAverage = PriceAverage::list($cards[$productId]->id, 'USD', $prices);

            $this->priceAverages->save($priceAverage);
        }
    }
}
