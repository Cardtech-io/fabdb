<?php
namespace FabDB\Domain\Users;

class AuthObserver
{
    /**
     * @var string
     */
    private $status;

    private $registered;
    private $user;

    public function registered()
    {
        $this->registered = true;
    }

    public function codeRequested()
    {
        $this->status = 'code-requested';
    }

    public function codeValidated(User $user)
    {
        $this->user = $user;
    }

    public function passwordValidated(User $user)
    {
        $this->user = $user;
    }

    public function user(): User
    {
        return $this->user;
    }

    public function registrationRequired()
    {
        $this->status = 'registration-required';
    }

    public function passwordRequired()
    {
        $this->status = 'password-required';
    }

    public function status(): string
    {
        return $this->status;
    }
}
