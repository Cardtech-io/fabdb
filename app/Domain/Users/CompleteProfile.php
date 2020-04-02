<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Dispatchable;

class CompleteProfile
{
    use Dispatchable;

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

    public function __construct(int $userId, $name, $gemId)
    {
        $this->userId = $userId;
        $this->name = $name;
        $this->gemId = $gemId;
    }

    public function handle(UserRepository $users)
    {
        /** @var User $user */
        $user = $users->find($this->userId);

        $user->completeProfile($this->name, $this->gemId);

        $users->save($user);

        $this->dispatch($user->releaseEvents());
    }
}