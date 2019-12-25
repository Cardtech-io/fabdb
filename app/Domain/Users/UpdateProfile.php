<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Dispatchable;

class UpdateProfile
{
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

    public function __construct(int $userId, $email, $name, $gemId)
    {
        $this->userId = $userId;
        $this->email = $email;
        $this->name = $name;
        $this->gemId = $gemId;
    }

    public function handle(UserRepository $users)
    {
        $user = $users->find($this->userId);

        $user->updateProfile($this->email, $this->name, $this->gemId);

        $this->dispatch($user->releaseEvents());
    }
}