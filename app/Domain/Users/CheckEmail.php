<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Dispatchable;
use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class CheckEmail implements Loggable
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

        if (!$user) {
            $this->observer->registrationRequired();
            return;
        }

        if ($user->hasPassword) {
            $this->observer->passwordRequired();
            return;
        }

        $this->requestCode($users, $user);
        $this->observer->codeRequested();
    }

    private function requestCode(UserRepository $users, User $user)
    {
        $user->auth();
        $users->save($user);

        $this->dispatch($user->releaseEvents());
    }
}
