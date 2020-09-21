<?php
namespace FabDB\Domain\Decks;

use FabDB\Library\Dispatchable;
use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class CopyDeck implements Loggable
{
    use LogsParams;
    use Dispatchable;

    /**
     * @var string
     */
    private $deckSlug;

    /**
     * @var int
     */
    private $userId;

    /**
     * @var CopyDeckObserver
     */
    private $observer;

    public function __construct(string $deckSlug, int $userId, CopyDeckObserver $observer)
    {
        $this->deckSlug = $deckSlug;
        $this->userId = $userId;
        $this->observer = $observer;
    }

    public function handle(DeckRepository $decks)
    {
        $newDeck = $decks->copy($this->deckSlug, $this->userId);

        $this->observer->deckWasCopied($this->deckSlug, $newDeck->slug);

        $this->dispatch($newDeck->releaseEvents());
    }
}
