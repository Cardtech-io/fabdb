<?php
namespace FabDB\Domain\Users;

class AuthObserver
{
    private $registered;
    private $user;

    public function registered()
    {
        $this->registered = true;
    }

    public function codeRequested()
    {
        $this->registered = false;
    }

    public function result(): bool
    {
        return $this->registered;
    }

    public function codeValidated(User $user)
    {
        $this->user = $user;
    }

    public function user(): User
    {
        return $this->user;
    }
}
