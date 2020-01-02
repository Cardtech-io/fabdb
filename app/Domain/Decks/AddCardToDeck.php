<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class AddCardToDeck implements Loggable
{
    use LogsParams;

    /**
     * @var Deck
     */
    private $deckId;

    /**
     * @var Card
     */
    private $cardId;

    public function __construct(int $deckId, int $cardId)
    {
        $this->deckId = $deckId;
        $this->cardId = $cardId;
    }

    public function handle(DeckRepository $decks)
    {
        $decks->addCardToDeck($this->deckId, $this->cardId);
    }
}
