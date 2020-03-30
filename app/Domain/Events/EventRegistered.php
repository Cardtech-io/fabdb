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

    /**
     * @var string|null
     */
    private $description;

    /**
     * @var float
     */
    private $cost;

    public function __construct(int $userId, string $name, $description, EventType $type, float $cost, Carbon $startsAt)
    {
        $this->userId = $userId;
        $this->name = $name;
        $this->description = $description;
        $this->type = $type;
        $this->startsAt = $startsAt;
        $this->cost = $cost;
    }

    public function name(): string
    {
        return $this->name;
    }

    public function description()
    {
        return $this->description;
    }

    public function userId(): int
    {
        return $this->userId;
    }

    public function type(): EventType
    {
        return $this->type;
    }

    public function cost(): float
    {
        return $this->cost;
    }

    public function startsAt(): Carbon
    {
        return $this->startsAt;
    }
}
