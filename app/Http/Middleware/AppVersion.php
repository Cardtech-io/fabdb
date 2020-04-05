<?php
namespace FabDB\Http\Middleware;

use Illuminate\Http\Request;

class AppVersion
{
    public function handle(Request $request, \Closure $next)
    {
        $response = $next($request);

        return $response->header('X-Version', fab_version());
    }
}