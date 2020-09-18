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

    /**
     * @var bool
     */
    private $useCollection;

    public function __construct(int $deckId, string $name, string $format, bool $useCollection, string $visibility, int $cardBack)
    {
        $this->deckId = $deckId;
        $this->name = $name;
        $this->format = $format;
        $this->visibility = $visibility;
        $this->cardBack = $cardBack;
        $this->useCollection = $useCollection;
    }

    public function handle(DeckRepository $decks)
    {
        /** @var Deck $deck */
        $deck = $decks->find($this->deckId);

        $deck->saveSettings($this->name, $this->format, $this->useCollection, $this->visibility, $this->cardBack);

        $decks->save($deck);

        $this->dispatch($deck->releaseEvents());
    }
}
