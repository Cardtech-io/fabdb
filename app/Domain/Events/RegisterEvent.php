<?php
namespace FabDB\Domain\Events;

use Carbon\Carbon;
use FabDB\Library\Dispatchable;

class RegisterEvent
{
    use Dispatchable;

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
    private $when;

    /**
     * @var EventRegistrationObserver
     */
    private $observer;

    public function __construct(EventRegistrationObserver $observer, int $userId, string $name, EventType $type, Carbon $when)
    {
        $this->observer = $observer;
        $this->userId = $userId;
        $this->name = $name;
        $this->type = $type;
        $this->when = $when;
    }

    public function handle(EventRepository $events)
    {
        $event = Event::register($this->userId, $this->name, $this->type, $this->when);

        $events->save($event);

        $this->observer->saved($event);

        $this->dispatch($event->releaseEvents());
    }
}
