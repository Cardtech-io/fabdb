<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class ProfileWasUpdated implements Loggable
{
    use LogsParams;

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
    private $avatar;

    /**
     * @var string
     */
    private $currency;

    /**
     * @var string
     */
    private $theme;

    private $width;

    public function __construct(int $userId, $email, $name, $gemId, $currency, $need, $avatar, $theme, $width)
    {
        $this->userId = $userId;
        $this->email = $email;
        $this->name = $name;
        $this->gemId = $gemId;
        $this->currency = $currency;
        $this->need = $need;
        $this->avatar = $avatar;
        $this->theme = $theme;
        $this->width = $width;
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

    public function currency(): string
    {
        return $this->currency;
    }

    public function need(): int
    {
        return $this->need;
    }

    public function avatar(): string
    {
        return $this->avatar;
    }

    public function theme(): string
    {
        return $this->theme;
    }

    public function width(): string
    {
        return $this->width;
    }
}
