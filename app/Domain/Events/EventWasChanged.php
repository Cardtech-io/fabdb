<?php
namespace FabDB\Domain\Events;

use Carbon\Carbon;
use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class EventWasChanged implements Loggable
{
    use LogsParams;

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
     * @var  string|null
     */
    private $description;

    /**
     * @var float
     */
    private $fee;

    public function __construct(string $name, $description, EventType $type, float $fee, Carbon $startsAt)
    {
        $this->name = $name;
        $this->description = $description;
        $this->type = $type;
        $this->startsAt = $startsAt;
        $this->fee = $fee;
    }

    public function name(): string
    {
        return $this->name;
    }

    public function description()
    {
        return $this->description;
    }

    public function type(): EventType
    {
        return $this->type;
    }

    public function fee(): float
    {
        return $this->fee;
    }

    public function startsAt(): Carbon
    {
        return $this->startsAt;
    }
}
