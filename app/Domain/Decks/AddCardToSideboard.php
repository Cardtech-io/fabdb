<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\CardRepository;

class AddCardToSideboard
{
    /**
     * @var int
     */
    private $deckId;

    /**
     * @var int
     */
    private $cardId;

    public function __construct(int $deckId, int $cardId)
    {
        $this->deckId = $deckId;
        $this->cardId = $cardId;
    }

    public function handle(DeckRepository $decks, CardRepository $cards)
    {
        $decks->addCardToSideboard($this->deckId, $this->cardId);
    }
}
