<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\InvalidIdentifier;
use FabDB\Domain\Cards\PrintingRepository;
use FabDB\Domain\Cards\Sku;
use FabDB\Domain\Stores\InvalidSet;
use FabDB\Domain\Stores\Listing;
use FabDB\Domain\Stores\ListingRepository;
use FabDB\Domain\Stores\VariantParser;
use FabDB\Domain\Stores\StoreRepository;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\RequestException;
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
     * @var PrintingRepository
     */
    private $printings;

    /**
     * Create a new command instance.
     *
     * @param CardRepository $cards
     * @param StoreRepository $stores
     * @param ListingRepository $listings
     * @param PrintingRepository $printings
     */
    public function __construct(
        CardRepository $cards,
        StoreRepository $stores,
        ListingRepository $listings,
        PrintingRepository $printings
    ) {
        parent::__construct();

        $this->cards = $cards;
        $this->stores = $stores;
        $this->listings = $listings;
        $this->printings = $printings;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->setLogChannel('scrape');

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
                    } catch (RequestException $e) {
                        Log::info($e->getMessage());
                        break 2;
                    }
                }

                $headers = $response->getHeaders();
                $results = json_decode($response->getBody()->getContents());

                foreach ($results->products as $product) {
                    if (!$product->variants[0]->sku) continue;

                    if ($product->variants[0]->sku && $this->possibleMatch($product->variants[0]->sku)) {
                        Log::debug('Sku matched for ['.$product->id.':'.$product->title.'] using sku ['.$product->variants[0]->sku.']');

                        foreach ($product->variants as $variant) {
                            if (!$variant->sku || !$this->possibleMatch($variant->sku)) continue;

                            $parser = new VariantParser($product, $variant);

                            // Ignore any listings with zero price
                            if ($parser->price() == 0) {
                                Log::debug('No price found for ['.$product->id.']');
                                continue;
                            }

                            try {
                                $this->createListing($parser, $product, $store);
                            } catch (InvalidIdentifier $e) {
                                Log::debug($e->getMessage());
                            } catch (ModelNotFoundException $e) {
                                Log::debug("Card not found for [{$parser->sku()}]");
                            }
                        }
                    } else {
                        Log::debug('Could not find a matching sku for ['.$product->id.':'.$product->title.'] using sku ['.$product->variants[0]->sku.']');
                    }
                }

                if (!isset($headers['Link'])) {
                    // there's no more records
                    break;
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
            if (strpos($storeId, '+')) {
                $storeId = (int) substr($storeId, 0, strlen($storeId) - 1);

                return $this->stores->findAllOver($storeId);
            }

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

    private function setLogChannel(string $channel)
    {
        config()->set('logging.default', $channel);
    }

    /**
     * @param VariantParser $parser
     * @param $product
     * @param $store
     */
    private function createListing(VariantParser $parser, $product, $store): void
    {
        try {
            Log::debug("New listing for [{$parser->sku()}, priced at: [{$parser->price()}]");

            $printing = $this->printings->findBySku($parser->sku()->raw());

            if (!$printing) {
                Log::debug("No valid printing found for sku [{$parser->sku()}]");
                return;
            }

            $link = '/products/' . $product->handle;

            $listing = Listing::register(
                $store->id,
                $printing->cardId,
                $printing->id,
                $parser->id(),
                $parser->price(),
                $link,
                $parser->available()
            );

            Log::info("Listing [$listing->id] registered.");
        }
        catch (InvalidSet $e) {
            Log::warning("Unable to determine set from [{$e->title()}, {$e->set()}]");
        }
    }

    private function possibleMatch(string $sku)
    {
        return preg_match(VariantParser::REGEX, $sku);
    }

    private function storePrefix($store)
    {
        return "{$store->apiCredentials->token()}:{$store->apiCredentials->password()}@{$store->apiCredentials->endpoint()}";
    }
}
