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

        $import = new CardsImport($this, $this->option('with-images'));
        $import->withOutput($this->output);

        if ($this->option('sheet')) {
            $import->onlySheets($this->option('sheet'));
        } else {
            $import->onlySheets(...$import->availableSheets);
        }

        $import->import('lss.xlsx', 'carddb');

        $this->output->success('Import successful.');

        return 1;
    }
}
