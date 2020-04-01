<?php
namespace FabDB\Domain\Events;

use FabDB\Domain\Decks\DeckRepository;

class SubmitDeck
{
    /**
     * @var int
     */
    private $eventId;

    /**
     * @var int
     */
    private $userId;

    /**
     * @var string
     */
    private $deckSlug;

    public function __construct(int $eventId, int $userId, string $deckSlug)
    {
        $this->eventId = $eventId;
        $this->deckSlug = $deckSlug;
        $this->userId = $userId;
    }

    public function handle(EventRepository $events, DeckRepository $decks)
    {
        $deck = $decks->bySlug($this->deckSlug);

        /** @var Event $event */
        $event = $events->find($this->eventId);

        $events->submitDeck($event, $deck->id, $this->userId);
    }
}
