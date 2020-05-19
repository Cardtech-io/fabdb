<?php
namespace FabDB\Domain\Users;

class ProfileWasCompleted
{
    /**
     * @var int
     */
    private $userId;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $gemId;

    public function __construct(int $userId, string $name, string $gemId)
    {
        $this->userId = $userId;
        $this->name = $name;
        $this->gemId = $gemId;
    }

    public function userId(): int
    {
        return $this->userId;
    }

    public function name(): string
    {
        return $this->name;
    }

    public function gemId(): string
    {
        return $this->gemId;
    }
}