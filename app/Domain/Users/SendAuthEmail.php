<?php
namespace FabDB\Domain\Users;

use Illuminate\Support\Facades\Mail;

class SendAuthEmail
{
    public function whenUserHasRegistered(UserHasRegistered $event)
    {
        $event->user()->notifyNow(new Welcome($event->user()));
    }

    public function whenUserRequestedAuth(UserRequestedAuth $event)
    {
        Mail::to($event->user())->send(new AuthCode($event->user()));
    }

    public function subscribe($events)
    {
        $events->listen(UserHasRegistered::class, SendAuthEmail::class.'@whenUserHasRegistered');
        $events->listen(UserRequestedAuth::class, SendAuthEmail::class.'@whenUserRequestedAuth');
    }
}
