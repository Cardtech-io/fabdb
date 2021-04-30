<?php
namespace FabDB\Http\Controllers\Shopify;

use FabDB\Domain\Shopify\Auth;
use FabDB\Domain\Stores\RegisterStore;
use FabDB\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class SetupController extends Controller
{
    public function home(Request $request, Auth $shopifyAuth)
    {
        $shop = $request->get('shop');
        $nonce = $shopifyAuth->createNonce($shop);

        Cache::put($this->cacheKey($shop), $nonce, 3600);

        return redirect($shopifyAuth->grantUrl($shop, $nonce));
    }

    /**
     * Finalise the installation of the application for a Shopify store.
     * This will setup the store, pairing the store record to a shopify
     * account, and saving an access token for long-term API access.
     */
    public function finalise(Request $request)
    {
        $cacheKey = $this->cacheKey($request->get('shop'));
        $nonce = Cache::get($cacheKey);

        if ($nonce !== $request->get('state')) {
            abort(422);
        }

        Cache::forget($cacheKey);

        $this->dispatchNow(new RegisterStore(
            $request->get('shop'),
            $request->get('code')
        ));
    }

    public function remove(Request $request)
    {

    }

    private function cacheKey($shop): string
    {
        return 'shop.nonce.'.$shop;
    }
}
