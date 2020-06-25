<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\InvalidIdentifier;
use FabDB\Domain\Stores\Listing;
use FabDB\Domain\Stores\VariantParser;
use FabDB\Domain\Stores\StoreRepository;
use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ScrapeStores extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'scrape:stores {store?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Scrapes the stores in the database and their products for pricing, matching.etc.';

    /**
     * @var CardRepository
     */
    private $cards;

    /**
     * @var StoreRepository
     */
    private $stores;

    /**
     * Stores an array of URLs already visited.
     *
     * @var array
     */
    private $cache = [];

    /**
     * Create a new command instance.
     *
     * @param CardRepository $cards
     * @param StoreRepository $stores
     */
    public function __construct(CardRepository $cards, StoreRepository $stores)
    {
        parent::__construct();

        $this->cards = $cards;
        $this->stores = $stores;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        foreach ($this->getStores() as $store) {
            $this->info('Importing store listings for store '.$store->id);

            $baseUri = "https://{$store->apiCredentials->token()}:{$store->apiCredentials->password()}@{$store->apiCredentials->endpoint()}.myshopify.com";
            $client = new Client(['base_uri' => $baseUri]);

            $query = '/admin/api/2020-04/products.json?limit=250';

            while ($query) {
                echo '.';

                $this->cache($baseUri, $query);

                $response = $client->get($query);
                $headers = $response->getHeaders();

                $results = json_decode($response->getBody()->getContents());

                foreach ($results->products as $product) {
                    if (preg_match('/[a-z]{3}[0-9]{3}/i', $product->variants[0]->sku)) {
                        foreach ($product->variants as $variant) {
                            $parser = new VariantParser($variant);

                            // Ignore any listings with zero price
                            if ($parser->price() == 0) continue;

                            try {
                                $card = $this->cards->findByIdentifier($parser->identifier()->raw());

                                $link = '/products/'.$product->handle;

                                Listing::register($store->id, $card->id, $parser->cardVariant(), $parser->price(), $link);
                            }
                            catch (InvalidIdentifier $e) {}
                            catch (ModelNotFoundException $e) {}
                        }
                    }
                }

                $links = $headers['Link'][0];
                preg_match_all('#\bhttps?://[^,\s()<>]+(?:\([\w\d]+\)|([^,[:punct:]\s]|/))#', $links, $matches);
                // If there's 2 matches, then the next url is index 1, else 0.
                $index = count($matches[0]) - 1;
                $url = parse_url($matches[0][$index]);

                $query = $url['path'] . '?' . $url['query'];

                if ($this->completed($baseUri, $query)) {
                    $this->info('Store '.$store->id.' completed.');
                    break;
                }
            }
        }
    }

    private function getStores()
    {
        if ($storeId = $this->argument('store')) {
            return collect([$this->stores->find($storeId)]);
        }

        return $this->stores->all();
    }

    private function cache($baseUri, $query)
    {
        $this->cache[] = $baseUri.$query;
    }

    private function completed($baseUri, $query)
    {
        return in_array($baseUri.$query, $this->cache);
    }
}
