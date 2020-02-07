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

    /**
     * @var int
     */
    private $need;

    public function __construct(int $userId, $email, $name, $gemId, $need)
    {
        $this->userId = $userId;
        $this->email = $email;
        $this->name = $name;
        $this->gemId = $gemId;
        $this->need = $need;
    }

    public function handle(UserRepository $users)
    {
        $user = $users->find($this->userId);

        $user->updateProfile($this->email, $this->name, $this->gemId, $this->need);

        $users->save($user);

        $this->dispatch($user->releaseEvents());
    }
}