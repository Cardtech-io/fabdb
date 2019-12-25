<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Dispatchable;
use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class AuthenticateUser implements Loggable
{
    use Dispatchable;
    use LogsParams;

    /**
     * @var string
     */
    private $email;

    /**
     * @var AuthObserver
     */
    private $observer;

    public function __construct(AuthObserver $observer, string $email)
    {
        $this->observer = $observer;
        $this->email = $email;
    }

    public function handle(UserRepository $users)
    {
        $user = $users->findByEmail($this->email);

        if (! $user) {
            $user = User::register($this->email);
            $this->observer->registered();
        } else {
            $user->auth();
            $this->observer->codeRequested();
        }

        $users->save($user);

        $this->dispatch($user->releaseEvents());

        return $user;
    }
}
