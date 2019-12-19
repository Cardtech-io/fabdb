<?php
namespace FabDB\Domain\Decks;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class RemoveDeck implements Loggable
{
    use LogsParams;

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
