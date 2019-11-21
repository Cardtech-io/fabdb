<?php
namespace FabDB\Domain\Decks;

class DeckWasAdded
{
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