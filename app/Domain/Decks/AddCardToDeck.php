<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;

class AddCardToDeck
{
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
        $decks->addCardToDeck($this->deck, $this->card);
    }
}
