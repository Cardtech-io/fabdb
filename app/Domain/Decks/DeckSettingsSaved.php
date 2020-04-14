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

    /**
     * @var string
     */
    private $name;

    public function __construct(int $deckId, string $name, string $visibility, int $cardBack)
    {
        $this->deckId = $deckId;
        $this->visibility = $visibility;
        $this->cardBack = $cardBack;
        $this->name = $name;
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

    public function name(): string
    {
        return $this->name;
    }
}