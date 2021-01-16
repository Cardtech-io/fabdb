<?php

namespace FabDB\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CacheCardMeans extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cache:card-averages';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Caches averages for individual cards in a separate, related table.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // Next we update cards so that we're storing the mean of each cheapest card value
        DB::statement('
            INSERT INTO card_means (card_id, mean_aud, mean_cad, mean_nzd, mean_usd)
            SELECT * FROM (
                SELECT
                    current_prices.card_id AS card_id,
                    (SELECT MIN(mean_current) FROM current_prices cp_aud WHERE cp_aud.card_id = current_prices.card_id AND cp_aud.currency = \'AUD\') AS aud_mean,
                    (SELECT MIN(mean_current) FROM current_prices cp_cad WHERE cp_cad.card_id = current_prices.card_id AND cp_cad.currency = \'CAD\') AS cad_mean,
                    (SELECT MIN(mean_current) FROM current_prices cp_nzd WHERE cp_nzd.card_id = current_prices.card_id AND cp_nzd.currency = \'NZD\') AS nzd_mean,
                    (SELECT MIN(mean_current) FROM current_prices cp_usd WHERE cp_usd.card_id = current_prices.card_id AND cp_usd.currency = \'USD\') AS usd_mean
                FROM current_prices
                GROUP BY current_prices.card_id
            ) as result
            ON DUPLICATE KEY UPDATE
                card_means.mean_aud = IF(result.aud_mean > 0, result.aud_mean, 0),
                card_means.mean_cad = IF(result.cad_mean > 0, result.cad_mean, 0),
                card_means.mean_nzd = IF(result.nzd_mean > 0, result.nzd_mean, 0),
                card_means.mean_usd = IF(result.usd_mean > 0, result.usd_mean, 0)
        ');
    }
}
