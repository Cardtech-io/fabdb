<?php
namespace FabDB\Domain\Events;

use Carbon\Carbon;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Users\User;
use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;

class Event extends Model
{
    use Raiseable;
    use Sluggable;

    protected $fillable = ['name', 'description', 'type', 'fee', 'startsAt'];
    protected $casts = [
        'fee' => 'float',
        'startsAt' => 'datetime',
    ];
    protected $with = ['manager'];

    public function manager()
    {
        return $this->belongsTo(User::class, 'user_id')->select('id', 'slug', 'name');
    }

    public function players()
    {
        return $this->hasMany(Player::class);
    }

    public function decks()
    {
        return $this->belongsToMany(Deck::class, 'submitted_decks')->withTimestamps();
    }

    public static function setup(int $userId, string $name, $description, EventType $type, float $fee, Carbon $startsAt)
    {
        $event = new static(compact('name', 'description', 'type', 'fee', 'startsAt'));
        $event->userId = $userId;

        $event->raise(new EventRegistered($userId, $name, $description, $type, $fee, $startsAt));

        return $event;
    }

    public function change(string $name, $description, EventType $type, float $fee, Carbon $startsAt)
    {
        $this->name = $name;
        $this->description = $description;
        $this->type = $type;
        $this->fee = $fee;
        $this->startsAt = $startsAt;

        $this->raise(new EventWasChanged($name, $description, $type, $fee, $startsAt));
    }

    public function register(int $userId)
    {
        $this->players()->firstOrCreate(['user_id' => $userId]);

        $this->raise(new PlayerHasRegistered($this->id, $userId));
    }

    public function unregister(int $userId)
    {
        $this->players()->whereUserId($userId)->delete();

        $this->raise(new PlayerHasUnregistered($this->id, $userId));
    }
}
