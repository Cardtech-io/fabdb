<?php
namespace FabDB\Domain\Events;

class PlayerHasUnregistered
{
    /**
     * @var int
     */
    private $eventId;

    /**
     * @var int
     */
    private $userId;

    public function __construct(int $eventId, $userId)
    {
        $this->eventId = $eventId;
        $this->userId = $userId;
    }

    public function eventId(): int
    {
        return $this->eventId;
    }

    public function userId(): int
    {
        return $this->userId;
    }
}