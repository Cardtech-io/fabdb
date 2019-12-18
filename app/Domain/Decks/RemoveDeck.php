<?php
namespace FabDB\Domain\Decks;

class RemoveDeck
{
    /**
     * @var Deck
     */
    private $deck;

    public function __construct(Deck $deck)
    {
        $this->deck = $deck;
    }

    public function handle(DeckRepository $decks)
    {
        $decks->delete($this->deck->slug);
    }
}
