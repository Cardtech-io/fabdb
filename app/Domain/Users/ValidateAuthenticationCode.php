<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;
use Illuminate\Support\Facades\Auth;

class ValidateAuthenticationCode implements Loggable
{
    use LogsParams;

    /**
     * @var string
     */
    private $email;

    /**
     * @var string
     */
    private $code;

    /**
     * @var AuthObserver
     */
    private $observer;

    public function __construct(AuthObserver $observer, string $email, string $code)
    {
        $this->observer = $observer;
        $this->email = $email;
        $this->code = $code;
    }

    public function handle(UserRepository $users)
    {
        $user = $users->findByEmailAndToken($this->email, $this->code);

        //$user->clearToken();
        $users->save($user);

        $this->observer->codeValidated($user);

        Auth::login($user);
    }
}
