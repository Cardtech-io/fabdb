<?php
namespace FabDB\Http\Middleware;

use FabDB\Domain\Shopify\Auth;
use FabDB\Domain\Shopify\Service;
use Illuminate\Http\Request;

class Shopify
{
    /**
     * @var Auth
     */
    private $auth;

    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    public function handle(Request $request, \Closure $next)
    {
        if (!$this->auth->passes($request->get('hmac'), $request->except('hmac'))) {
            abort(422);
        }

        return $next($request);
    }
}
