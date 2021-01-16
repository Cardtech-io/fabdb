<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Dispatchable;
use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class UpdateProfile implements Loggable
{
    use LogsParams;
    use Dispatchable;

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

    /**
     * @var string
     */
    private $currency;

    /**
     * @var string
     */
    private $theme;

    /**
     * @var string
     */
    private $width;

    /** @var string */
    private $newPassword;

    public function __construct(int $userId, $email, $newPassword, $name, $gemId, $currency, $need, string $view, string $avatar, string $theme, string $width)
    {
        $this->userId = $userId;
        $this->email = $email;
        $this->name = $name;
        $this->gemId = $gemId;
        $this->currency = $currency;
        $this->need = $need;
        $this->view = $view;
        $this->avatar = $avatar;
        $this->theme = $theme;
        $this->width = $width;
        $this->newPassword = $newPassword;
    }

    public function handle(UserRepository $users)
    {
        $user = $users->find($this->userId);

        $user->updateProfile(
            $this->email,
            $this->newPassword,
            $this->name,
            $this->gemId,
            $this->currency,
            $this->need,
            $this->view,
            $this->avatar,
            $this->theme,
            $this->width
        );

        $users->save($user);

        $this->dispatch($user->releaseEvents());
    }
}
