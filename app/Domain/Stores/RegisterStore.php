<?php
namespace FabDB\Domain\Stores;

use FabDB\Domain\Shopify\Auth;
use FabDB\Domain\Shopify\Service;
use GuzzleHttp\Client;
use Illuminate\Support\Arr;

class RegisterStore
{
    /**
     * @var string
     */
    private $shop;

    /**
     * @var string
     */
    private $code;

    public function __construct(string $shop, string $code)
    {
        $this->shop = $shop;
        $this->code = $code;
    }

    public function handle(Auth $auth, StoreRepository $stores)
    {
        $accessToken = $auth->requestAccessToken($this->shop, $this->code);

        $shopify = new Service($accessToken);

        $properties = Arr::only($shopify->storeProperties($this->shop), ['name', 'email','domain', 'currency']);

        $store = Store::install($properties, $accessToken);

        $stores->save($store);
    }
}
