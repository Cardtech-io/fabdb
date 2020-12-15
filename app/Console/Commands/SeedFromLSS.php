<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\CardsImport;
use Illuminate\Console\Command;
use Maatwebsite\Excel\Facades\Excel;

class SeedFromLSS extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:seed-from-lss';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seeds the card + printing database, based on the XLS file provided by LSS.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Excel::import(new CardsImport, storage_path('carddb/lss.xlsx'));
    }
}
