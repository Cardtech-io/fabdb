<?php
namespace FabDB\Domain\Shopify;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Contracts\Session\Session;

class Service
{
    /**
     * @var array
     */
    private $config;

    /**
     * @var Client
     */
    private $client;

    /**
     * @var AccessToken
     */
    private $accessToken;

    public function __construct(AccessToken $accessToken)
    {
        $this->config = config()->get('services.shopify');
        $this->client = app(Client::class);
        $this->accessToken = $accessToken;
    }

    public function storeProperties(string $domain)
    {
        $response = $this->client->get('https://'.$domain.'/admin/api/2021-04/shop.json', [
            'headers' => [
                'X-Shopify-Access-Token' => (string) $this->accessToken
            ]
        ]);

        return json_decode($response->getBody()->getContents(), true)['shop'];
    }
}
