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

    public function __construct(string $deckSlug, int $userId)
    {
        $this->deckSlug = $deckSlug;
        $this->userId = $userId;
    }

    public function handle(DeckRepository $decks)
    {
        $newDeck = $decks->copy($this->deckSlug, $this->userId);

        $this->dispatch($newDeck->releaseEvents());
    }
}
