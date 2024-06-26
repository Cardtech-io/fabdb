<?php
namespace FabDB\Domain\Decks;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class DeckSettingsSaved implements Loggable
{
    use LogsParams;

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
     * @var string
     */
    private $label;

    public function __construct(int $deckId, string $name, string $label, string $format, string $visibility, int $cardBack)
    {
        $this->deckId = $deckId;
        $this->name = $name;
        $this->label = $label;
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

    public function label(): string
    {
        return $this->label;
    }
}
