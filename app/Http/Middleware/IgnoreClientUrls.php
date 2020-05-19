<?php
namespace FabDB\Http\Middleware;

use Illuminate\Http\Request;

/**
 * This logic is also used in our fallback() route in web.php. However, there are some routes that are supported
 * both in the browser, and on the server. So when we detect a route that is front-end supported, we first rendre
 * the entire application, and then have that called again for the data required.
 */
class IgnoreClientUrls
{
    public function handle(Request $request, \Closure $next)
    {
        if (!$request->wantsJson() && $this->matches($request->path())) {
            return response()->view('layout');
        }

        return $next($request);
    }

    private function matches(string $path): bool
    {
        foreach (config('spa.client') as $pattern) {
            $pattern = str_replace('/', '\/', $pattern);

            if (preg_match("/^{$pattern}/i", $path)) {
                return true;
            }
        }

        return false;
    }
}
