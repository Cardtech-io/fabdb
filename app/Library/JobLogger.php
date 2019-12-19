<?php
namespace FabDB\Library;

use Illuminate\Log\LogManager;
use Psr\Log\LoggerInterface;

class JobLogger
{
    /**
     * @var LogManager
     */
    private $log;

    public function __construct(LoggerInterface $log)
    {
        $this->log = $log;
    }

    public function handle($job, \Closure $next)
    {
        if (is_object($job) && $job instanceof Loggable) {
            $this->log->debug('Executed '.get_class($job).'.', $job->log());
        }

        $next($job);
    }
}