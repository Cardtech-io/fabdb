<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Dispatchable;
use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class UpdateProfile implements Loggable
{
    use LogsParams;
    use Dispatchable;

    private $userId;
    private $email;
    private $name;
    private $gemId;
    private $need;
    private $avatar;
    private $currency;
    private $theme;
    private $width;

    /** @var string */
    private $newPassword;

    public function __construct(int $userId, $email, $newPassword, $name, $gemId, $currency, $need, string $avatar, string $theme, string $width)
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
            $this->avatar,
            $this->theme,
            $this->width
        );

        $users->save($user);

        $this->dispatch($user->releaseEvents());
    }
}
