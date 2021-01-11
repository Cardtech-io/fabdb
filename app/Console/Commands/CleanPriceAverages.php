<?php
namespace FabDB\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CleanPriceAverages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:clean-price-averages';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Removes redundant price average records.';

    public function handle()
    {
        DB::statement('delete p1 from price_averages p1 join price_averages p2 on p2.card_id = p1.card_id and p2.variant = p1.variant and p2.currency = p1.currency and p2.high = p1.high and p2.mean = p1.mean and p2.low = p1.low WHERE p1.created_at > p2.created_at');
    }
}
