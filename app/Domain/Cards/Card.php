<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Collection\OwnedCard;
use FabDB\Domain\Comments\Comment;
use FabDB\Domain\Stores\Listing;
use FabDB\Domain\Stores\Store;
use FabDB\Domain\Voting\Voteable;
use FabDB\Library\Casts\CastsIdentifier;
use FabDB\Library\Casts\CastsRarity;
use FabDB\Library\Casts\CastsSet;
use FabDB\Library\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class Card extends Model
{
    use Voteable;

    public $timestamps = false;

    protected $casts = [
        'keywords' => 'array',
        'stats' => 'array',
        'identifier' => CastsIdentifier::class,
        'rarity' => CastsRarity::class,
    ];

    protected $fillable = ['identifier', 'cycle', 'name', 'image', 'rarity', 'text', 'flavour', 'comments', 'keywords', 'stats', 'searchText'];
    protected $hidden = ['id'];

    public function ad()
    {
        return $this->hasOne(Listing::class, 'card_id', 'id')
            ->join('stores', 'stores.id', '=', 'listings.store_id')
            ->where('available', '>', 0)
            ->orderBy(DB::raw('RAND()'));
    }

    public function ownedCards()
    {
        return $this->hasMany(OwnedCard::class);
    }

    public function printings()
    {
        return $this->hasMany(Printing::class, 'card_id', 'id');
    }

    public function variants()
    {
        return $this->belongsToMany(Card::class, 'variants', 'card_id', 'variant_id');
    }

    public function variantOf()
    {
        return $this->hasOneThrough(Card::class,Variant::class, 'variant_id', 'id', 'id', 'card_id');
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function listings()
    {
        return $this->hasMany(Listing::class)
            ->join('stores', function($join) {
                $join->on('stores.id', '=', 'listings.store_id');
                $join->whereNull('stores.deleted_at');
            });
    }

    public function getBannedAttribute()
    {
        return in_array($this->identifier, config('game.cards.banned'));
    }

    public function rulings()
    {
        return $this->belongsToMany(Ruling::class);
    }

    public function newCollection(array $models = [])
    {
        return new Cards($models);
    }

    public static function register(Identifier $identifier, string $name, string $image, Rarity $rarity, $text, $flavour, $comments, array $keywords, array $stats): Card
    {
        $searchText = "$identifier $name $text ".implode(' ', $keywords);
        $card = static::whereIdentifier($identifier->raw())->first();

        if ($card) {
            $card->name = $name;

            if (!$card->image && $image) {
                $card->image = $image;
            }

            if (count($keywords)) {
                $card->keywords = $keywords;
            }

            if ($stats) {
                $card->stats = $stats;
            }

            $card->save();
        } else {
            $card = static::create(compact( 'name', 'identifier', 'image', 'rarity', 'text', 'keywords', 'stats', 'searchText'));
        }

        return $card;
    }

    public function fabled()
    {
        return $this->rarity->equals(new Rarity('F'));
    }

    public function legendary()
    {
        return $this->rarity->equals(new Rarity('L'));
    }

    public function resourceful(): bool
    {
        return Arr::has($this->stats, 'resource');
    }

    public function setNameAttribute($name)
    {
        // Remove colour information from name values, if they exist
        if (Str::contains($name, ['(', ')'])) {
            $name = preg_replace('/\s\([a-z]+\)/i', '', $name);
        }

        $this->attributes['name'] = $name;
    }

    public function isHero(): bool
    {
        return in_array('hero', $this->keywords);
    }

    public function isWeapon(): bool
    {
        return in_array('weapon', $this->keywords);
    }

    public function isTalented()
    {
        return $this->talent !== null;
    }

    public function talents()
    {
        preg_match('/essence of ([a-z]+) and ([a-z]+)/i', $this->text, $matches);

        if ($matches) {
            array_shift($matches);
        }

        return array_filter(Arr::flatten([$this->talent, array_map(fn($match) => strtolower($match), $matches)]));
    }

    public function is1hWeapon()
    {
        return $this->isWeapon() && in_array('1h', $this->keywords);
    }

    public function isEquipment(): bool
    {
        return in_array('equipment', $this->keywords);
    }

    public function isGeneric(): bool
    {
        $classes = array_keys(config('game.classes'));

        return in_array('generic', $this->keywords) || !count(array_intersect($classes, $this->keywords));
    }

    public function oneHanded(): bool
    {
        return $this->isWeapon() && in_array('1h', $this->keywords);
    }

    public function isToken()
    {
        return in_array('token', $this->keywords);
    }
}
