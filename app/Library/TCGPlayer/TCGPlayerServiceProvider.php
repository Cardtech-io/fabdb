<?php
namespace FabDB\Library\TCGPlayer;

use FabDB\Providers\AppServiceProvider;

class TCGPlayerServiceProvider extends AppServiceProvider
{
    public function boot()
    {
        $this->registerTCGPlayerClient();
    }

    private function registerTCGPlayerClient()
    {
        $this->app->bind(Client::class, function($app) {
            $guzzle = new \GuzzleHttp\Client(['base_uri' => 'https://api.tcgplayer.com/v1.39.0']);

            return new Client($guzzle);
        });
    }
}
