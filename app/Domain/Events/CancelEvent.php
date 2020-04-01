<?php
namespace FabDB\Domain\Events;

class CancelEvent
{
    /**
     * @var string
     */
    private $slug;

    public function __construct(string $slug)
    {
        $this->slug = $slug;
    }

    public function handle(EventRepository $events)
    {
        $events->delete($this->slug);
    }
}
