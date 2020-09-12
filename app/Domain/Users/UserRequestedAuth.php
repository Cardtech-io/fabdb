<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class UserRequestedAuth implements Loggable
{
    use LogsParams;

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
