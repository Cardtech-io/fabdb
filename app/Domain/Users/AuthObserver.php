<?php
namespace FabDB\Domain\Users;

class AuthObserver
{
    private $registered;

    public function registered()
    {
        $this->registered = true;
    }

    public function authenticated()
    {
        $this->registered = false;
    }

    public function result(): bool
    {
        return $this->registered;
    }
}
