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

    /** @var  string|null */
    private $description;

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

    /**
     * @var float
     */
    private $cost;


    public function __construct(EventRegistrationObserver $observer, int $userId, string $name, $description, EventType $type, float $cost, Carbon $when)
    {
        $this->observer = $observer;
        $this->userId = $userId;
        $this->name = $name;
        $this->description = $description;
        $this->type = $type;
        $this->cost = $cost;
        $this->when = $when;
    }

    public function handle(EventRepository $events)
    {
        $event = Event::register($this->userId, $this->name, $this->description, $this->type, $this->cost, $this->when);

        $events->save($event);

        $this->observer->saved($event);

        $this->dispatch($event->releaseEvents());
    }
}
