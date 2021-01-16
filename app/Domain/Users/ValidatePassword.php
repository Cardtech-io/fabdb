<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ValidatePassword implements Loggable
{
    use LogsParams;

    /**
     * @var string
     */
    private $email;

    /**
     * @var string
     */
    private $password;

    /**
     * @var AuthObserver
     */
    private $observer;

    public function __construct(AuthObserver $observer, string $email, string $password)
    {
        $this->observer = $observer;
        $this->email = $email;
        $this->password = $password;
    }

    public function handle(UserRepository $users)
    {
        $user = $users->findByEmail($this->email);

        if (Hash::check($this->password, $user->password)) {
            $this->observer->passwordValidated($user);
            Auth::login($user);
        } else {
            throw new InvalidPassword;
        }
    }
}
