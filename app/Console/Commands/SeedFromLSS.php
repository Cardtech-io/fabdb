<?php
namespace FabDB\Console\Commands;

use Illuminate\Console\Command;

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
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        return 0;
    }
}
