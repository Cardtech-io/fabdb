<?php
namespace FabDB\Domain\Decks;

use FabDB\Library\Dispatchable;

class SaveDeckSettings
{
    use Dispatchable;

    public function __construct(
        private int $deckId,
        private string $name,
        private string $label,
        private string $notes,
        private string $videoUrl,
        private string $format,
        private int $limitToCollection,
        private string $visibility,
        private int $cardBack
    ) {}

    public function handle(DeckRepository $decks)
    {
        /** @var Deck $deck */
        $deck = $decks->find($this->deckId);

        $deck->saveSettings(
            $this->name,
            $this->label,
            $this->notes,
            $this->videoUrl,
            $this->format,
            $this->limitToCollection,
            $this->visibility,
            $this->cardBack
        );

        $decks->save($deck);

        $this->dispatch($deck->releaseEvents());
    }
}
