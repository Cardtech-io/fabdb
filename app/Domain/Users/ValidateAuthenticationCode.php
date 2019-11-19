<?php
namespace FabDB\Domain\Users;

use Illuminate\Support\Facades\Auth;

class ValidateAuthenticationCode
{
    /**
     * @var string
     */
    private $email;

    /**
     * @var string
     */
    private $code;

    public function __construct(string $email, string $code)
    {
        $this->email = $email;
        $this->code = $code;
    }

    public function handle(UserRepository $users)
    {
        $user = $users->findByEmailAndToken($this->email, $this->code);
        $user->clearToken();

        $users->save($user);

        Auth::login($user);
    }
}
