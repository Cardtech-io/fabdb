<?php
namespace FabDB\Domain\Events;

use Carbon\Carbon;
use FabDB\Domain\Users\User;
use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;

class Event extends Model
{
    use Raiseable;
    use Sluggable;

    protected $fillable = ['name', 'type', 'startsAt'];
    protected $casts = ['startsAt' => 'datetime'];
    protected $with = ['manager'];

    public function manager()
    {
        return $this->belongsTo(User::class, 'user_id')->select('id', 'slug', 'name');
    }

    public static function register(int $userId, string $name, EventType $type, Carbon $startsAt)
    {
        $event = new static(compact('name', 'type', 'startsAt'));
        $event->userId = $userId;

        $event->raise(new EventRegistered($userId, $name, $type, $startsAt));

        return $event;
    }

    public function change(string $name, EventType $type, Carbon $startsAt)
    {
        $this->name = $name;
        $this->type = $type;
        $this->startsAt = $startsAt;

        $this->raise(new EventWasChanged($name, $type, $startsAt));
    }
}
