<?php
namespace FabDB\Library;

use Illuminate\Container\Container;
use Illuminate\Support\Facades\Log;

trait Dispatchable
{
    /**
     * Loop through all events and fire them.
     *
     * @param array|object $events
     */
    public function dispatch($events)
    {
        if (!is_array($events)) {
            $events = [$events];
        }

        foreach (array_filter($events) as $event) {
            $this->logEvent($event);
            $this->fireEvent($event);
        }
    }

    /**
     * Dispatch all events provided.
     *
     * @param array $events
     */
    public function dispatchAll(array $events)
    {
        foreach ($events as $event) {
            $this->dispatch($event);
        }
    }

    /**
     * Logs the event provided.
     *
     * @param object $event
     */
    protected function logEvent($event)
    {
        Log::debug('Executed '.get_class($event).'.', $event->log());
    }

    /**
     * Fires the event provided.
     *
     * @param Loggable $event
     */
    protected function fireEvent(Loggable $event)
    {
        Container::getInstance()->make('events')->dispatch($event);
    }
}
