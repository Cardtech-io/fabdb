<?php
namespace FabDB\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CacheCurrentPrices extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cache:current-prices';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Caches all card averages across all printing_ids and currencies.';

    public function handle()
    {
        // Next we update the current prices table (this is a much smaller table for read access)
        DB::statement('
            INSERT INTO current_prices (card_id, printing_id, currency, high_current, mean_current, low_current)
            SELECT * FROM (
                SELECT
                    cards.id,
                    pa.printing_id,
                    pa.currency,
                    (SELECT MAX(pa2.high) FROM price_averages pa2 WHERE pa2.card_id = cards.id AND pa2.currency = pa.currency) AS high,
                    (SELECT AVG(pa2.mean) FROM price_averages pa2 WHERE pa2.card_id = cards.id AND pa2.currency = pa.currency) AS mean,
                    (SELECT  MIN(pa2.low) FROM price_averages pa2 WHERE pa2.card_id = cards.id AND pa2.currency = pa.currency) AS low
                FROM cards
                JOIN price_averages pa ON pa.card_id = cards.id
                GROUP BY cards.id, pa.currency, pa.printing_id
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
