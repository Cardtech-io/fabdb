<?php
namespace FabDB\Domain\Decks;

use Carbon\Carbon;
use FabDB\Domain\Cards\Card;
use FabDB\Domain\Content\Feature;
use FabDB\Domain\Practise\Practise;
use FabDB\Domain\Users\User;
use FabDB\Domain\Voting\Voteable;
use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
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

    protected $hidden = ['id', 'user_id', 'hero_id'];

    public function hero()
    {
        return $this->belongsTo(Card::class, 'hero_id');
    }

    public function versions()
    {
        return $this->hasMany(Deck::class, 'version_id', 'version_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function parent()
    {
        return $this->belongsTo(Deck::class)->where('parent_id' , '!=', 'id');
    }

    public function practise()
    {
        return $this->belongsTo(Practise::class);
    }

    public function feature()
    {
        return $this->morphOne(Feature::class, 'featureable');
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

    public function scopeFeatured($query)
    {
        $query->with(['hero']);
    }

    public function scopeWithPrice($query)
    {
        $query->addSelect(
            DB::raw('(
                SELECT SUM(cards.price * deck_cards.total)
                FROM cards
                JOIN deck_cards ON deck_cards.card_id = cards.id
                WHERE deck_cards.deck_id = decks.id
            ) AS price')
        );
    }

    public static function add(int $userId, string $name, ?int $practiseId)
    {
        $deck = new Deck;
        $deck->user_id = $userId;
        $deck->practise_id = $practiseId;
        $deck->name = $name;

        $deck->raise(new DeckWasAdded($userId, $name, $practiseId));

        return $deck;
    }

    public static function importTournamentDeck($details, $heroId, $format, $result)
    {
        $deck = self::add(0, $details->decklist, null);
        $deck->label = 'tournament';
        $deck->heroId = $heroId;
        $deck->format = $format;
        $deck->event = $details->event;
        $deck->player = $details->player;
        $deck->decklist = $details->decklist;
        $deck->result = $result;
        $deck->visibility = 'public';
        $deck->createdAt = Carbon::createFromFormat('j M Y',  $details->date);
        $deck->updatedAt = $deck->createdAt;

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

    public function mainKeywords()
    {
        $hero = $this->hero;
        $keywords = ['generic'];

        if ($hero) {
            $keywords = array_merge($this->hero->classes, $keywords);

            // Be sure to include main class keyword if talented
            if ($hero->isTalented()) {
                $keywords = array_merge($keywords, $hero->utilisesTalents());
            }
        }

        return Arr::flatten($keywords);
    }

    public function hasWeapon()
    {
        return $this->cards->hasWeapon();
    }

    public function scopeWithCardCount($query)
    {
        $query->addSelect(
            DB::raw('(SELECT SUM(deck_cards.total) FROM deck_cards WHERE deck_cards.deck_id = decks.id) - 1 AS total_cards')
        );
    }

    public function weapon()
    {
        return $this->weapons()->first();
    }

    public function weapons()
    {
        return $this->belongsToMany(Card::class, 'deck_cards')
            ->orderBy('cards.name')
            ->withPivot('id', 'total')
            ->where('cards.type', 'weapon');
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

    public function saveSettings(
        string $name,
        string $label,
        string $notes,
        string $videoUrl,
        string $format,
        int $limitToCollection,
        string $visibility,
        int $cardBack
    ) {
        // We don't want timestamps updated as this shouldn't trigger a re-render of all the images when
        // downloading the deck sheet for tabletop simulator.
        $this->timestamps = false;
        $this->name = $name;
        $this->notes = $notes;
        $this->videoUrl = $videoUrl;
        $this->label = $label;
        $this->format = $format;
        $this->limitToCollection = $limitToCollection;
        $this->visibility = $visibility;
        $this->cardBack = $cardBack;

        $this->raise(new DeckSettingsSaved(
            $this->id,
            $name,
            $label,
            $format,
            $visibility,
            $cardBack
        ));
    }

    public function copy(int $userId, string $name = null)
    {
        $name = $this->name;

        if (is_null($name) && !Str::contains($name, '(copy)')) {
            $name .= ' (copy)';
        }

        $deck = new Deck;
        $deck->parentId = $this->id;
        $deck->heroId = $this->heroId;
        $deck->name = $name;
        $deck->notes = $this->notes;
        $deck->userId = $userId;
        $deck->version = $this->version;
        $deck->format = $this->format;
        $deck->visibility = 'private';

        $deck->raise(new DeckWasCopied($this->id, $userId));

        return $deck;
    }

    public function cardBackImage()
    {
        $domain = config('services.imgix.domain');

        return "https://$domain/cards/backs/card-back-{$this->cardBack}.png";
    }

    public function bumpVersion(int $fromDeckId)
    {
        $this->versionId = $fromDeckId;
        $this->version = $this->version + 1;
    }
}
