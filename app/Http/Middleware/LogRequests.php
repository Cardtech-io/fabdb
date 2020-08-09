<?php
namespace FabDB\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LogRequests
{

    public function handle(Request $request, \Closure $next)
    {
        $context = ['ip' => $request->ip(), 'query' => $request->all()];

        Log::info('Requested API endpoint: '.$request->path(), $context);

        return $next($request);
    }
}
