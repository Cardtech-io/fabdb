<?php
namespace FabDB\Domain\Users;

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
        $user = $users->findByEmailAndCode($this->email, $this->code);
        $user->clearToken();

        $users->save($user);
    }
}
