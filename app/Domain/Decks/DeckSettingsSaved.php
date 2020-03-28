<?php
namespace FabDB\Domain\Decks;

class DeckSettingsSaved
{
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

    public function deckId(): int
    {
        return $this->deckId;
    }

    public function visibility(): string
    {
        return $this->visibility;
    }

    public function cardBack(): int
    {
        return $this->cardBack;
    }
}