<?php
namespace FabDB\Domain\Events;

use Carbon\Carbon;

class EventWasChanged
{
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

    public function __construct(string $name, EventType $type, Carbon $startsAt)
    {
        $this->name = $name;
        $this->type = $type;
        $this->startsAt = $startsAt;
    }

    public function name(): string
    {
        return $this->name;
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