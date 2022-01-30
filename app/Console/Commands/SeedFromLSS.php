<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\CardsImport;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class SeedFromLSS extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:seed-from-lss {--with-images} {--prints-only} {--skip-existing}';

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

        $file = $this->askWithCompletion('Which file would you like to import?', ['all', ...$this->availableFiles()]);
        $prints = $this->getData($file);

        $this->import(function($import) use ($prints) {
            $import->collection($prints);
        });

        $this->output->success('Import successful.');
    }

    private function import(\Closure $callback)
    {
        $import = new CardsImport($this, $this->option('with-images'), $this->option('prints-only'));

        $callback($import);
    }

    private function availableFiles()
    {
        $files = Storage::disk('carddb')->files();

        return array_filter($files, fn($file) => preg_match('/\.json/', $file));
    }

    private function getData(string $file)
    {
        return collect(json_decode(Storage::disk('carddb')->get($file), true));
    }
}
