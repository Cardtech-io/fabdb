<?php
namespace FabDB\Domain\Decks;

use FabDB\Library\Dispatchable;

class SaveDeckSettings
{
    use Dispatchable;

    /**
     * @var int
     */
    private $deckId;

    /**
     * @var string
     */
    private $visibility;

    /**
     * @var int
     */
    private $cardBack;

    public function __construct(int $deckId, string $visibility, int $cardBack)
    {
        $this->deckId = $deckId;
        $this->visibility = $visibility;
        $this->cardBack = $cardBack;
    }

    public function handle(DeckRepository $decks)
    {
        /** @var Deck $deck */
        $deck = $decks->find($this->deckId);

        $deck->saveSettings($this->visibility, $this->cardBack);

        $decks->save($deck);

        $this->dispatch($deck->releaseEvents());
    }
}
