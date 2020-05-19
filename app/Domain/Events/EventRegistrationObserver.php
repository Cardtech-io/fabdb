<?php
namespace FabDB\Domain\Events;

class EventRegistrationObserver
{
    /** @var Event */
    private $event;

    public function saved(Event $event)
    {
        $this->event = $event;
    }

    public function event(): Event
    {
        return $this->event;
    }
}