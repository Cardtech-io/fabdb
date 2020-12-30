<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Dispatchable;

class RegisterUser
{
    use Dispatchable;

    /**
     * @var AuthObserver
     */
    private $observer;

    /**
     * @var string
     */
    private $email;

    public function __construct(AuthObserver $observer, string $email)
    {
        $this->observer = $observer;
        $this->email = $email;
    }

    public function handle(UserRepository $users)
    {
        $user = User::register($this->email);

        $users->save($user);

        $this->observer->registered();

        $this->dispatch($user->releaseEvents());
    }
}
