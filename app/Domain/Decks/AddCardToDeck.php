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
    private $deck;

    /**
     * @var Card
     */
    private $card;

    public function __construct(Deck $deck, Card $card)
    {
        $this->deck = $deck;
        $this->card = $card;
    }

    public function handle(DeckRepository $decks)
    {
        $decks->addCardToDeck($this->deck->id, $this->card->id);
    }
}
