<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Collection\OwnedCard;
use FabDB\Domain\Comments\Comment;
use FabDB\Domain\Market\CurrentPrice;
use FabDB\Domain\Stores\Listing;
use FabDB\Domain\Voting\Voteable;
use FabDB\Library\Casts\CastsIdentifier;
use FabDB\Library\Casts\CastsRarity;
use FabDB\Library\Casts\CastsStats;
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
        'classes' => 'array',
        'talents' => 'array',
        'sub_types' => 'array',
        'stats' => CastsStats::class,
        'identifier' => CastsIdentifier::class,
        'rarity' => CastsRarity::class,
    ];

    protected $fillable = ['identifier', 'cycle', 'name', 'image', 'rarity', 'text', 'flavour', 'comments', 'keywords', 'classes', 'talents', 'type', 'sub_types', 'stats', 'searchText'];
    protected $hidden = ['id'];

    public function ad()
    {
        return $this->hasOne(Listing::class, 'card_id', 'id')
            ->join('stores', 'stores.id', '=', 'listings.store_id')
            ->where('available', '>', 0)
            ->orderBy(DB::raw('RAND()'));
    }

    public function cardPrices()
    {
        return $this->hasMany(CardPrice::class);
    }

    // Points to the current price record that represents the best value
    public function currentPrice()
    {
        return $this->belongsTo(CardPrice::class, 'price_id');
    }

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function translations()
    {
        return $this->hasMany(Translation::class);
    }

    public function ownedCards()
    {
        return $this->hasMany(OwnedCard::class);
    }

    public function printings()
    {
        return $this->hasMany(Printing::class);
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

    public function rulings()
    {
        return $this->belongsToMany(Ruling::class);
    }

    public function newCollection(array $models = [])
    {
        return new Cards($models);
    }

    public static function register(Identifier $identifier, string $name, string $image, Rarity $rarity, $text, $flavour, $comments, array $keywords, $type, array $stats): Card
    {
        $searchText = "$identifier $name $text ".implode(' ', $keywords);
        $card = static::whereIdentifier($identifier->raw())->first();
        $sub_types = array_values(array_unique(array_intersect($keywords, config('game.sub_types'))));
        $talents = array_values(array_intersect($keywords, array_keys(config('game.talents'))));
        $classes = array_values(array_intersect($keywords, array_keys(config('game.classes'))));

        if (empty($sub_types)) $sub_types = null;
        if (empty($talents)) $talents = null;
        if (empty($classes)) $classes = null;

        if ($card) {
            $card->name = $name;

            if (!$card->image && $image) {
                $card->image = $image;
            }

            if (count($keywords)) {
                $card->keywords = $keywords;
                $card->type = $type;
                $card->subTypes = $sub_types;
                $card->talents = $talents;
                $card->classes = $classes;
            }

            if ($stats) {
                $card->stats = $stats;
            }

            $card->save();
        } else {
            $card = static::create(compact( 'name', 'identifier', 'image', 'rarity', 'text', 'keywords', 'type', 'sub_types', 'talents', 'classes', 'stats', 'searchText'));
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
        return isset($this->stats) && Arr::has($this->stats, 'resource') && $this->stats['resource'] > 0;
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
        return $this->type === 'hero';
    }

    public function isWeapon(): bool
    {
        return $this->type === 'weapon';
    }

    public function isTalented()
    {
        return !empty($this->talents) || $this->hasEssence();
    }

    public function hasEssence()
    {
        return (bool) preg_match('/essence of ([a-z]+)/i', $this->text);
    }

    public function essences()
    {
        $paragraphs = explode("\n", $this->text);
        $parts = preg_split('/[^\w]/', strtolower($paragraphs[0]));
        $matches = array_filter($parts, fn($part) => in_array($part, array_keys(config('game.talents'))));

        return array_values(array_unique($matches));
    }

    public function utilisesTalents()
    {
        return array_merge((array) $this->talents, (array) $this->essences());
    }

    public function isEquipment(): bool
    {
        return $this->type === 'equipment';
    }

    public function isGeneric(): bool
    {
        $classes = array_keys(config('game.classes'));

        return in_array('generic', $this->keywords) || !count(array_intersect($classes, $this->keywords));
    }

    public function isToken()
    {
        return in_array('token', $this->keywords);
    }

    public function getLegalityAttribute($value): array
    {
        if (is_null($value)) {
            return [];
        }

        return json_decode($value, true);
    }
}
