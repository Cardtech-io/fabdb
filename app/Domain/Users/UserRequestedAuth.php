<?php
namespace FabDB\Domain\Users;

class UserRequestedAuth
{
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function user()
    {
        return $this->user;
    }
}