<?php
namespace FabDB\Console\Commands;

use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class RenameImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:rename-images';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Renames images within the selected set folder.';

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
        $set = $this->ask('Which set would you like to rename the images for?');

        $disk = Storage::disk('scraped');
        $cards = $disk->files("$set/");

        foreach ($cards as $name => $src) {
            if (!preg_match_all('/'.$set.'\/'.$set.'-?([0-9]+)/i', $src, $matches)) continue;

            $cardId = strtoupper($set).str_pad($matches[1][0], 3, 0, STR_PAD_LEFT);
            $dest = "$set/$cardId.png";

            if ($disk->exists($dest) && $src) {
                $disk->delete($dest);
            }

            $this->info("Moved $src to $dest");
            $disk->move($src, $dest);
        }
    }
}
