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

    protected $fillable = ['name', 'description', 'type', 'cost', 'startsAt'];
    protected $casts = [
        'cost' => 'float',
        'startsAt' => 'datetime',
    ];
    protected $with = ['manager'];

    public function manager()
    {
        return $this->belongsTo(User::class, 'user_id')->select('id', 'slug', 'name');
    }

    public function participants()
    {
        return $this->hasMany(Participant::class);
    }

    public static function register(int $userId, string $name, $description, EventType $type, float $cost, Carbon $startsAt)
    {
        $event = new static(compact('name', 'description', 'type', 'cost', 'startsAt'));
        $event->userId = $userId;

        $event->raise(new EventRegistered($userId, $name, $description, $type, $cost, $startsAt));

        return $event;
    }

    public function change(string $name, $description, EventType $type, float $cost, Carbon $startsAt)
    {
        $this->name = $name;
        $this->description = $description;
        $this->type = $type;
        $this->cost = $cost;
        $this->startsAt = $startsAt;

        $this->raise(new EventWasChanged($name, $description, $type, $cost, $startsAt));
    }

    public function participate(int $userId)
    {
        $this->participants()->firstOrCreate(['user_id' => $userId]);
    }
}
