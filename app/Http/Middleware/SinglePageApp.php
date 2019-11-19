<?php
namespace FabDB\Http\Middleware;

use Illuminate\Http\Request;

class SinglePageApp
{
    public function handle(Request $request, \Closure $next)
    {
        if (!$request->accepts('application/json')) {
            return response()->view('welcome');
        }

        return $next($request);
    }
}
