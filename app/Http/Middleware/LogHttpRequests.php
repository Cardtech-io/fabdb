<?php
namespace FabDB\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Log\Logger;

class LogHttpRequests
{
    private $logger;

    public function __construct(Logger $logger)
    {
        $this->logger = $logger;
    }

    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);
        
        $this->logger->info('Dump request', [
            'request' => serialize($request),
            'response' => serialize($response),
        ]);

        return $response;
    }
}
