<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Decks\DeckRepository;
use FabDB\Domain\Decks\ExportDeckToZip;
use Illuminate\Console\Command;

class TestExportDeck extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:test-zip-export';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Tests deck ZIP export functionality.';

    public function handle()
    {
        $command = new ExportDeckToZip(18, 'Kirk Bushell', '7374656', 'Test event name');

        $command->handle(app(DeckRepository::class));
    }
}