<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;

class RemoveCardFromDeck
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
        $decks->removeCardFromDeck($this->deck, $this->card);
    }
}
