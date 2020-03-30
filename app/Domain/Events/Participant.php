<?php
namespace FabDB\Domain\Events;

use FabDB\Domain\Users\User;
use FabDB\Library\Model;

class Participant extends Model
{
    protected $fillable = ['user_id', 'event_id'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
