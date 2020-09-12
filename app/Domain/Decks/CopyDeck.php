<?php
namespace FabDB\Domain\Decks;

class CopyDeck
{
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
        $decks->copy($this->deckSlug, $this->userId);
    }
}
