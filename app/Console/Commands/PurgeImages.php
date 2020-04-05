<?php
namespace FabDB\Console\Commands;

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class PurgeImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:purge-images';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Purges images from the image store, imgix.';

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
            if (preg_match('/DS_Store$/i', $src)) continue;

            $this->purge($src);
        }
    }

    private function purge(string $dest)
    {
        $imageDomain = config('services.imgix.domain');

        $url = "https://$imageDomain/cards/{$dest}";

        $this->info('Purging... '.$url);

        $this->client->post('https://api.imgix.com/v2/image/purger', [
            'auth' => [env('IMGIX_API_KEY'), ''],
            'json' => ['url' => $url]
        ]);
    }
}
