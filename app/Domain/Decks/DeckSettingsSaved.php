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

    public function format(): string
    {
        return $this->format;
    }
}