<?php
namespace FabDB\Domain\Events;

use Carbon\Carbon;
use FabDB\Library\Dispatchable;

class ChangeEvent
{
    use Dispatchable;

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
     * @var string
     */
    private $slug;

    /**
     * @var string|null
     */
    private $description;

    /**
     * @var float
     */
    private $cost;

    public function __construct(string $slug, string $name, $description, EventType $type, float $cost, Carbon $startsAt)
    {
        $this->slug = $slug;
        $this->name = $name;
        $this->type = $type;
        $this->startsAt = $startsAt;
        $this->description = $description;
        $this->cost = $cost;
    }

    public function handle(EventRepository $events)
    {
        /** @var Event $event */
        $event = $events->bySlug($this->slug);

        $event->change($this->name, $this->description, $this->type, $this->cost, $this->startsAt);

        $events->save($event);

        $this->dispatch($event->releaseEvents());
    }
}
