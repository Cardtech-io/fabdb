<?php
namespace FabDB\Domain\Decks;

use Carbon\Carbon;
use FabDB\Domain\Cards\Card;
use FabDB\Domain\Users\User;
use FabDB\Domain\Voting\Vote;
use FabDB\Domain\Voting\Voteable;
use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;
use Illuminate\Support\Str;

class Deck extends Model
{
    use Raiseable;
    use Sluggable;
    use Voteable;

    protected $casts = [
        'slug' => 'string',
        'decksheet_created_at' => 'datetime',
        'use_collection' => 'boolean',
    ];

    protected $hidden = ['id', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function votes()
    {
        return $this->morphMany(Vote::class, 'voteable');
    }

    public function deckCards()
    {
        return $this->hasMany(DeckCard::class);
    }

    public function cards()
    {
        return $this->belongsToMany(Card::class, 'deck_cards')
            ->orderBy('cards.name')
            ->withPivot('id', 'total');
    }

    public function sideboard()
    {
        return $this->belongsToMany(Card::class, 'sideboard')
            ->orderBy('cards.name')
            ->withPivot('id', 'total')
            ->withTimestamps();
    }

    public static function add(int $userId, string $name)
    {
        $deck = new Deck;
        $deck->user_id = $userId;
        $deck->name = $name;

        $deck->raise(new DeckWasAdded($userId, $name));

        return $deck;
    }

    public function card($identifier)
    {
        $column = is_numeric($identifier) ? 'id' : 'identifier';

        return $this->cards->where($column, $identifier)->first();
    }

    public function sideboardCard($identifier)
    {
        $column = is_numeric($identifier) ? 'id' : 'identifier';

        return $this->sideboard->where($column, $identifier)->first();
    }

    public function mainKeyword()
    {
        $hero = $this->hero();
        $classes = config('game.classes');

        if ($hero) {
            return !isset($classes[$hero->keywords[0]]) ? $hero->keywords[1] : $hero->keywords[0];
        }

        return null;
    }

    public function hasWeapon()
    {
        return $this->cards->hasWeapon();
    }

    public function getHeroAttribute()
    {
        return $this->cards->hero();
    }

    public function hero()
    {
        return $this->cards->hero();
    }

    public function weapon()
    {
        return $this->weapons()->first();
    }

    public function weapons()
    {
        return $this->cards->weapons();
    }

    public function equipment()
    {
        return $this->cards->equipment()->values();
    }

    public function other($pitch = null)
    {
        return $this->cards->other($pitch)->values();
    }

    public function equipmentTotal()
    {
        return $this->equipment()->sum('total') + $this->weapons()->sum('total');
    }

    public function otherTotal()
    {
        return $this->other()->sum('total');
    }

    public function requiresNewSheet()
    {
        return empty($this->decksheet) || $this->decksheetCreatedAt->lt($this->updatedAt);
    }

    public function saveSettings(string $name, string $format, int $limitToCollection, string $visibility, int $cardBack)
    {
        // We don't want timestamps updated as this shouldn't trigger a re-render of all the images when
        // downloading the deck sheet for tabletop simulator.
        $this->timestamps = false;
        $this->name = $name;
        $this->format = $format;
        $this->limitToCollection = $limitToCollection;
        $this->visibility = $visibility;
        $this->cardBack = $cardBack;

        $this->raise(new DeckSettingsSaved($this->id, $name, $format, $visibility, $cardBack));
    }

    public function copy(int $userId)
    {
        $name = $this->name;

        if (!Str::contains($name, '(copy)')) {
            $name .= ' (copy)';
        }

        $deck = new Deck;
        $deck->parentId = $this->id;
        $deck->name = $name;
        $deck->userId = $userId;
        $deck->format = $this->format;

        $deck->raise(new DeckWasCopied($this->id, $userId));

        return $deck;
    }
}
