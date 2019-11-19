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
        $class = get_class($event);

        Log::info("Event [$class] fired", get_object_vars($event));
    }

    /**
     * Fires the event provided.
     *
     * @param object $event
     */
    protected function fireEvent($event)
    {
        Container::getInstance()->make('events')->dispatch($event);
    }
}
