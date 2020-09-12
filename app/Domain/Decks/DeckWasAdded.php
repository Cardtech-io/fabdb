<?php
namespace FabDB\Domain\Decks;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class DeckWasAdded implements Loggable
{
    use LogsParams;

    /**
     * @var int
     */
    private $userId;

    /**
     * @var string
     */
    private $name;

    public function __construct(int $userId, string $name)
    {
        $this->userId = $userId;
        $this->name = $name;
    }

    public function userId(): int
    {
        return $this->userId;
    }

    public function name(): string
    {
        return $this->name;
    }
}
