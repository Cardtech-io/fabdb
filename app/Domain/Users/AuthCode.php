<?php
namespace FabDB\Domain\Users;

use Illuminate\Mail\Mailable;

class AuthCode extends Mailable
{
    /**
     * @var User
     */
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function build()
    {
        $this->subject('Authentication code | fabdb.net');
        $this->view('emails.auth', ['code' => $this->user->token]);
    }
}