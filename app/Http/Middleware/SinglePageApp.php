<?php
namespace FabDB\Http\Middleware;

use Illuminate\Http\Request;

class SinglePageApp
{
    public function handle(Request $request, \Closure $next)
    {
        if (! $request->hasSession() || ! $request->user()) {
            dd('wut');
            return $next($request);
        }

        if (! $request->wantsJson()) {
            return response()->view('welcome');
        }

        return $next($request);
    }
}
