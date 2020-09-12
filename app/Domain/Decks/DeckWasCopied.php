<?php
namespace FabDB\Domain\Decks;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class DeckWasCopied implements Loggable
{
    use LogsParams;

    /**
     * @var int
     */
    private $deckId;

    /**
     * @var int
     */
    private $userId;

    public function __construct(int $deckId, int $userId)
    {
        $this->deckId = $deckId;
        $this->userId = $userId;
    }

    public function deckId(): int
    {
        return $this->deckId;
    }

    public function userId(): int
    {
        return $this->userId;
    }
}
