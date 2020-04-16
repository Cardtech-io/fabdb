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

    /**
     * @var string
     */
    private $name;
    /**
     * @var string
     */
    private $format;

    public function __construct(int $deckId, string $name, string $format, string $visibility, int $cardBack)
    {
        $this->deckId = $deckId;
        $this->name = $name;
        $this->format = $format;
        $this->visibility = $visibility;
        $this->cardBack = $cardBack;
    }

    public function handle(DeckRepository $decks)
    {
        /** @var Deck $deck */
        $deck = $decks->find($this->deckId);

        $deck->saveSettings($this->name, $this->format, $this->visibility, $this->cardBack);

        $decks->save($deck);

        $this->dispatch($deck->releaseEvents());
    }
}
