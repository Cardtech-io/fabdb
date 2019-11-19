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

    public function __construct(string $email)
    {
        $this->email = $email;
    }

    public function handle(UserRepository $users)
    {
        $user = $users->findByEmail($this->email);

        if (! $user) {
            $user = User::register($this->email);
        } else {
            $user->auth();
        }

        $users->save($user);

        $this->dispatch($user->releaseEvents());
    }
}
