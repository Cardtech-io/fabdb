<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\InvalidIdentifier;
use FabDB\Domain\Stores\Listing;
use FabDB\Domain\Stores\ListingRepository;
use FabDB\Domain\Stores\VariantParser;
use FabDB\Domain\Stores\StoreRepository;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ServerException;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Log;

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
     * @var ListingRepository
     */
    private $listings;

    /**
     * Create a new command instance.
     *
     * @param CardRepository $cards
     * @param StoreRepository $stores
     */
    public function __construct(CardRepository $cards, StoreRepository $stores, ListingRepository $listings)
    {
        parent::__construct();

        $this->cards = $cards;
        $this->stores = $stores;
        $this->listings = $listings;
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

            if ($store->apiCredentials->collection()) {
                $query .= '&collection_id='.$store->apiCredentials->collection();
            }

            while ($query) {
                echo '.';

                $this->cache($baseUri, $query);

                while (true) {
                    try {
                        $response = $client->get($query);
                        break;
                    } catch (ServerException $e) {
                        if (502 == $e->getCode()) {
                            sleep(1);
                            // wait a second, then try again.
                        }
                    }
                }

                $headers = $response->getHeaders();

                $results = json_decode($response->getBody()->getContents());

                foreach ($results->products as $product) {
                    if (preg_match('/[a-z]{3}[0-9]{3}/i', $product->variants[0]->sku)) {
                        Log::debug('Identifier matched for ['.$product->id.':'.$product->title.']');

                        foreach ($product->variants as $variant) {
                            $parser = new VariantParser($product, $variant);

                            // Ignore any listings with zero price
                            if ($parser->price() == 0) {
                                Log::debug('No price found for ['.$product->id.']');
                                continue;
                            }

                            try {
                                Log::debug('New variant for ['.$parser->identifier()->raw().':'.$parser->cardVariant().' - '.$parser->price().']');

                                $card = $this->cards->findByIdentifier($parser->identifier()->raw());
                                $link = '/products/' . $product->handle;

                                $listing = Listing::register(
                                    $store->id,
                                    $card->id,
                                    $parser->cardVariant(),
                                    $parser->price(),
                                    $link,
                                    $parser->available()
                                );

                                Log::debug('Listing ['.$listing->id.'] registered.');
                            }
                            catch (InvalidIdentifier $e) {}
                            catch (ModelNotFoundException $e) {}
                        }
                    } else {
                        Log::debug('Could not find a matching sku for ['.$product->id.':'.$product->title.']');
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
