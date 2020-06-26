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
        DB::statement('
            INSERT INTO price_averages (card_id, variant, currency, price, created_at)
            SELECT cards.id, listings.variant, stores.currency, AVG(listings.price) as price, NOW()
            FROM cards 
            JOIN listings ON listings.card_id = cards.id 
            JOIN stores ON stores.id = listings.store_id 
            GROUP BY cards.id, stores.currency, listings.variant
        ');
    }
}