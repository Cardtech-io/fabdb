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

    public function __construct(string $slug, string $name, EventType $type, Carbon $startsAt)
    {
        $this->slug = $slug;
        $this->name = $name;
        $this->type = $type;
        $this->startsAt = $startsAt;
    }

    public function handle(EventRepository $events)
    {
        /** @var Event $event */
        $event = $events->bySlug($this->slug);

        $event->change($this->name, $this->type, $this->startsAt);

        $events->save($event);

        $this->dispatch($event->releaseEvents());
    }
}
