<?php
namespace FabDB\Domain\Decks;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class DeckWasAdded implements Loggable
{
    use LogsParams;

    private int $userId;
    private string $name;
    private ?int $practiseId;

    public function __construct(int $userId, string $name, ?int $practiseId)
    {
        $this->userId = $userId;
        $this->name = $name;
        $this->practiseId = $practiseId;
    }

    public function userId(): int
    {
        return $this->userId;
    }

    public function name(): string
    {
        return $this->name;
    }

    public function practiseId(): ?int
    {
        return $this->practiseId;
    }
}
