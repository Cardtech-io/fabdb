<?php
namespace FabDB\Domain\Decks;

class RemoveCardFromSideboard
{
    private $deckId;
    private $cardId;

    public function __construct(int $deckId, int $cardId)
    {
        $this->deckId = $deckId;
        $this->cardId = $cardId;
    }

    public function handle(DeckRepository $decks)
    {
        $decks->removeCardFromSideboard($this->deckId, $this->cardId);
    }
}
