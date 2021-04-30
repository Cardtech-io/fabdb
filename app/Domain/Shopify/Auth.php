<?php
namespace FabDB\Domain\Shopify;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Contracts\Session\Session;

class Auth
{
    /**
     * @var array
     */
    private $config;

    /**
     * @var Session
     */
    private $session;

    /**
     * @var Client
     */
    private $client;

    public function __construct(Repository $config, Session $session, Client $client)
    {
        $this->config = $config->get('services.shopify');
        $this->session = $session;
        $this->client = $client;
    }

    public function grantUrl(string $domain, string $nonce)
    {
        $redirectUri = 'https://'.$this->config['domain'].'/auth/callback';

        $payload = [
            'client_id' => $this->config['key'],
            'scope' => $this->config['scopes'],
            'redirect_uri' => $redirectUri,
            'state' => $nonce
        ];

        $query = http_build_query($payload);

        return "https://$domain/admin/oauth/authorize?$query";
    }

    /**
     * Returns true if the hmac required matches the one generated.
     *
     * @param string $hmac
     * @param array $payload
     * @return bool
     */
    public function passes(string $hmac, array $payload): bool
    {
        $query = http_build_query($payload);
        $hash = hash_hmac('sha256', $query, $this->config['secret']);

        return $hash === $hmac;
    }

    /**
     * Creates a nonce which can be validated later.
     *
     * @param string $shop
     * @return string
     */
    public function createNonce(string $shop): string
    {
        return md5($shop.microtime());
    }

    /**
     * Requests a long-living access token for the store.
     */
    public function requestAccessToken(string $shop, string $code)
    {
        $payload = [
            'client_id' => $this->config['key'],
            'client_secret' => $this->config['secret'],
            'code' => $code
        ];

        try {
            $response = $this->client->post("https://$shop/admin/oauth/access_token", [
//                'headers' => [
//                    'content-type' => 'application/json'
//                ],
                'form_params' => $payload
            ]);

            return AccessToken::fromJson($response->getBody()->getContents());
        }
        catch (RequestException $e) {
            dd($e->getResponse()->getBody()->getContents());
        }
    }
}
