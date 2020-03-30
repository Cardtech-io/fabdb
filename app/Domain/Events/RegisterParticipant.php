<?php
namespace FabDB\Domain\Events;

use FabDB\Library\Dispatchable;

class RegisterParticipant
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
        /** @var Event $event */
        $event = $events->find($this->eventId);

        $event->participate($this->userId);
    }
}