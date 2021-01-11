<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\CardsImport;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;

class SeedFromLSS extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:seed-from-lss {--with-images} {--sheet=}';

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
        $this->output->title('Starting import');

        if ($this->option('sheet')) {
            $this->import(function($import) {
                $import->onlySheets($this->option('sheet'));
            });
        } else {
            $this->import(function($import) {
                $import->except(['ira_singles', 'wtr_hero_singles', 'promo_singles']);
            });
            $this->import(function($import) {
                $import->only(['ira_singles', 'wtr_hero_singles', 'promo_singles']);
            });
        }

        $this->output->success('Import successful.');
    }

    private function import(\Closure $callback)
    {
        $import = new CardsImport($this, $this->option('with-images'));
        $import->withOutput($this->output);

        $callback($import);

        $import->import('lss.xlsx', 'carddb');
    }
}
