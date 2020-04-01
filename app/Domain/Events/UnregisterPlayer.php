<?php
namespace FabDB\Domain\Events;

use FabDB\Library\Dispatchable;

class UnregisterPlayer
{
    use Dispatchable;

    /**
     * @var int
     */
    private $eventId;

    /**
     * @var int
     */
    private $userId;

    public function __construct(int $eventId, int $userId)
    {
        $this->eventId = $eventId;
        $this->userId = $userId;
    }

    public function handle(EventRepository $events)
    {
        $event = $events->find($this->eventId);

        $event->unregister($this->userId);

        $this->dispatch($event->releaseEvents());
    }
}