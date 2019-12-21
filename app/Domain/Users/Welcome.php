<?php
namespace FabDB\Domain\Users;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class Welcome extends Notification
{
    /**
     * @var User
     */
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function toMail()
    {
        $message = new MailMessage;
        $message->subject('Welcome | fabdb.net');
        $message->view('emails.welcome', ['code' => $this->user->token]);

        return $message;
    }

    public function via()
    {
        return ['mail'];
    }
}
