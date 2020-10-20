<?php
namespace FabDB\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CachePriceAverages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cache:averages';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Caches all card averages across all variants and currencies.';

    public function handle()
    {
        // First we cache all the prices from the listings table
        DB::statement('
            INSERT INTO price_averages (card_id, variant, currency, high, mean, low, created_at)
            SELECT
                cards.id,
                l1.variant,
                s1.currency,
                (SELECT MAX(l2.price) FROM listings l2 JOIN stores s2 ON s2.id = l2.store_id WHERE l2.card_id = cards.id AND l2.variant = l1.variant AND s2.currency = s1.currency),
                (SELECT AVG(l2.price) FROM listings l2 JOIN stores s2 ON s2.id = l2.store_id WHERE l2.card_id = cards.id AND l2.variant = l1.variant AND s2.currency = s1.currency),
                (SELECT MIN(l2.price) FROM listings l2 JOIN stores s2 ON s2.id = l2.store_id WHERE l2.card_id = cards.id AND l2.variant = l1.variant AND s2.currency = s1.currency),
                NOW()
            FROM cards
            JOIN listings l1 ON l1.card_id = cards.id
            JOIN stores s1 ON s1.id = l1.store_id
            GROUP BY cards.id, s1.currency, l1.variant
        ');

        // Next we update the current listings table (this is a much smaller table for read access)
        DB::statement('
            INSERT INTO current_prices (card_id, variant, currency, high_current, mean_current, low_current)
            SELECT * FROM (
                SELECT
                    cards.id,
                    l1.variant,
                    s1.currency,
                    (SELECT MAX(l2.price) FROM listings l2 JOIN stores s2 ON s2.id = l2.store_id WHERE l2.card_id = cards.id AND l2.variant = l1.variant AND s2.currency = s1.currency) AS high,
                    (SELECT AVG(l2.price) FROM listings l2 JOIN stores s2 ON s2.id = l2.store_id WHERE l2.card_id = cards.id AND l2.variant = l1.variant AND s2.currency = s1.currency) AS mean,
                    (SELECT MIN(l2.price) FROM listings l2 JOIN stores s2 ON s2.id = l2.store_id WHERE l2.card_id = cards.id AND l2.variant = l1.variant AND s2.currency = s1.currency) AS low
                FROM cards
                JOIN listings l1 ON l1.card_id = cards.id
                JOIN stores s1 ON s1.id = l1.store_id
                GROUP BY cards.id, s1.currency, l1.variant
            ) as result
            ON DUPLICATE KEY UPDATE
                high_previous = high_current,
                mean_previous = mean_current,
                low_previous = low_current,
                high_current = result.high,
                mean_current = result.mean,
                low_current = result.low
        ');
    }
}
