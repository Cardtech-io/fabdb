<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Dispatchable;

class AuthenticateUser
{
    use Dispatchable;

    /**
     * @var string
     */
    private $email;

    /**
     * @var AuthObserver
     */
    private $observer;

    public function __construct(string $email, AuthObserver $observer)
    {
        $this->email = $email;
        $this->observer = $observer;
    }

    public function handle(UserRepository $users)
    {
        $user = $users->findByEmail($this->email);

        if (! $user) {
            $user = User::register($this->email);
            $this->observer->registered();
        } else {
            $user->auth();
            $this->observer->authenticated();
        }

        $users->save($user);

        $this->dispatch($user->releaseEvents());
    }
}
