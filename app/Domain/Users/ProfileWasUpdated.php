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

    /**
     * @var int
     */
    private $need;

    /**
     * @var string
     */
    private $view;

    /**
     * @var string
     */
    private $avatar;

    public function __construct(int $userId, $email, $name, $gemId, $need, $view, $avatar)
    {
        $this->userId = $userId;
        $this->email = $email;
        $this->name = $name;
        $this->gemId = $gemId;
        $this->need = $need;
        $this->view = $view;
        $this->avatar = $avatar;
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

    public function need(): int
    {
        return $this->need;
    }

    public function view(): string
    {
        return $this->view;
    }

    public function avatar(): string
    {
        return $this->avatar;
    }
}