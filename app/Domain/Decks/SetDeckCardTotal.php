<?php
namespace FabDB\Domain\Decks;

class SetDeckCardTotal
{
    private $deckId;
    private $cardId;
    private $total;

    public function __construct($deckId, $cardId, $total)
    {
        $this->deckId = $deckId;
        $this->cardId = $cardId;
        $this->total = $total;
    }

    public function handle(DeckRepository $decks)
    {
        $decks->setCardTotal($this->deckId, $this->cardId, $this->total);
    }
}
