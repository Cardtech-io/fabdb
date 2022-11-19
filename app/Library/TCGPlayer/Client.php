<?php
namespace FabDB\Library\TCGPlayer;

use GuzzleHttp\Exception\RequestException;

class Client
{
    public function __construct(private \GuzzleHttp\Client $client) {}

    public function authToken()
    {
        $response = $this->post('token', [
            'body' => http_build_query([
                'grant_type' => 'client_credentials',
                'client_id' => config('services.tcg_player.public_key'),
                'client_secret' => config('services.tcg_player.private_key')
            ])
        ]);

        $data = json_decode($response->getBody());

        $accessToken = $data->access_token;

        cache()->put('tcgplayer_access_token', $accessToken);
    }

    public function categories()
    {
        $response = $this->request('get', 'catalog/categories?limit=100', [
            'headers' => [
                'Authorization' =>  'bearer '.cache('tcgplayer_access_token')
            ]
        ]);

        $response->getBody()->getContents();
    }

    public function products()
    {
        $offset = 0;

        while (true) {
            $response = $this->request('get', 'catalog/products?limit=100&offset='.$offset.'&categoryId=62', [
                'headers' => [
                    'Authorization' =>  'bearer '.cache('tcgplayer_access_token')
                ]
            ]);

            $body = json_decode($response->getBody()->getContents());

            if (!$body->results) break;

            foreach ($body->results as $product) yield $product;

            $offset += 100;
        }
    }

    public function productPrices(array $productIds)
    {
        $offset = 0;
        $chunks = array_chunk($productIds, 100);

        foreach ($chunks as $productIds) {
            $path = 'pricing/product/' . implode(',', $productIds);

            $response = $this->request('get', $path, [
                'headers' => [
                    'Authorization' => 'bearer ' . cache('tcgplayer_access_token')
                ]
            ]);

            $body = json_decode($response->getBody()->getContents());

            if (!$body->results) break;

            foreach ($body->results as $product) yield $product;

            $offset += 100;
        }
    }

    private function post($endpoint, $options = [])
    {
        return $this->request('post', $endpoint, $options);
    }

    private function request(string $method, string $path, array $options = [])
    {
        try {
            return $this->client->request($method, $path, $options);
        }
        catch (RequestException $e) {
            return $e->getResponse();
        }
    }
}
