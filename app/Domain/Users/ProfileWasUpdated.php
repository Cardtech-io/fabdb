<?php
namespace FabDB\Domain\Users;

class ProfileWasUpdated
{
    /**
     * @var int
     */
    private $userId;

    /**
     * @var string
     */
    private $email;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $gemId;

    public function __construct(int $userId, $email, $name, $gemId)
    {
        $this->userId = $userId;
        $this->email = $email;
        $this->name = $name;
        $this->gemId = $gemId;
    }

    public function userId(): int
    {
        return $this->userId;
    }

    public function email()
    {
        return $this->email;
    }

    public function name()
    {
        return $this->name;
    }

    public function gemId()
    {
        return $this->gemId;
    }
}