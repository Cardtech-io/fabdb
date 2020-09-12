<?php
namespace FabDB\Domain\Events;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class PlayerHasUnregistered implements Loggable
{
    use LogsParams;

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
