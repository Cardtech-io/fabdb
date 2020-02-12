<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Dispatchable;

class UpdateName
{
    use Dispatchable;

    /**
     * @var string
     */
    private $name;

    /**
     * @var int
     */
    private $userId;

    public function __construct(int $userId, string $name)
    {
        $this->userId = $userId;
        $this->name = $name;
    }

    public function handle(UserRepository $users)
    {
        $user = $users->find($this->userId);

        $user->updateName($this->name);

        $users->save($user);

        $this->dispatch($user->releaseEvents());
    }
}