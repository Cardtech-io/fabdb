<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\CardsImport;
use Illuminate\Console\Command;

class SeedFromLSS extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:seed-from-lss {--with-images}';

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

        $sheet = $this->askWithCompletion('Which sheet would you like to import?', ['all', ...CardsImport::availableSheets()]);

        if ($sheet !== 'all') {
            $this->import(function($import) use ($sheet) {
                $import->onlySheets($sheet);
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

        $import->import('fabtcg_datasheet.xlsx', 'carddb');
    }
}
