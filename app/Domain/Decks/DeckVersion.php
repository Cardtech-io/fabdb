<?php

namespace FabDB\Domain\Decks;

use FabDB\Library\Dispatchable;

class DeckVersion
{
    use Dispatchable;

    public function __construct(private NewVersionObserver $observer, private int $deckId) {}

    public function handle(DeckRepository $decks)
    {
        $deck = $decks->find($this->deckId);

        $newDeck = $decks->copy($deck, $deck->userId, true);

        $this->observer->deckCopied($newDeck->slug);
    }
}
