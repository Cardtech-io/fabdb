<?php
namespace FabDB\Domain\Events;

use Carbon\Carbon;

class EventRegistered
{
    /**
     * @var int
     */
    private $userId;

    /**
     * @var string
     */
    private $name;

    /**
     * @var EventType
     */
    private $type;

    /**
     * @var Carbon
     */
    private $startsAt;

    public function __construct(int $userId, string $name, EventType $type, Carbon $startsAt)
    {
        $this->userId = $userId;
        $this->name = $name;
        $this->type = $type;
        $this->startsAt = $startsAt;
    }

    public function name(): string
    {
        return $this->name;
    }

    public function userId(): int
    {
        return $this->userId;
    }

    public function type(): EventType
    {
        return $this->type;
    }

    public function startsAt(): Carbon
    {
        return $this->startsAt;
    }
}
