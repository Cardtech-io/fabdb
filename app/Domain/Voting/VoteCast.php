<?php
namespace FabDB\Domain\Voting;

class VoteCast
{
    private int $userId;
    private string $type;
    private int $foreignId;
    private string $direction;

    public function __construct(int $userId, string $type, int $foreignId, string $direction)
    {
        $this->userId = $userId;
        $this->type = $type;
        $this->foreignId = $foreignId;
        $this->direction = $direction;
    }

    public function userId(): int
    {
        return $this->userId;
    }

    public function type(): string
    {
        return $this->type;
    }

    public function foreignId(): int
    {
        return $this->foreignId;
    }

    public function direction(): string
    {
        return $this->direction;
    }
}
