<?php
namespace FabDB\Console\Commands;

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class RenameCards extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:rename-cards';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * @var Client
     */
    private $client;

    public function __construct(Client $client)
    {
        parent::__construct();
        $this->client = $client;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $disk = Storage::disk('scraped');

        $cards = $disk->files('arc/');

        foreach ($cards as $name => $src) {
            if (!preg_match_all('/arc\/ARC([0-9]+)/', $src, $matches)) continue;

            $cardId = $matches[1][0];
            $dest = 'arc/'.$cardId.'.png';

            if ($disk->exists($dest) && $src) {
                $disk->delete($dest);
                $disk->move($src, $dest);
                $this->info("Moved $src to $dest.");
            }
        }
    }
}
