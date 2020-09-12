<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Loggable;
use FabDB\Library\LogsParams;

class UserHasRegistered implements Loggable
{
    use LogsParams;

    /**
     * @var User
     */
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function user(): User
    {
        return $this->user;
    }
}
