<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Comments\Comment;
use FabDB\Domain\Stores\Listing;
use FabDB\Domain\Stores\Store;
use FabDB\Domain\Voting\Voteable;
use FabDB\Library\Model;
use Illuminate\Support\Facades\DB;

class Card extends Model
{
    use Voteable;

    public $timestamps = false;

    protected $casts = ['keywords' => 'array', 'stats' => 'array'];
    protected $fillable = ['identifier', 'name', 'rarity', 'text', 'flavour', 'comments', 'keywords', 'stats', 'searchText'];
    protected $hidden = ['id'];

    public function ad()
    {
        return $this->hasOne(Listing::class, 'card_id', 'id')
            ->join('stores', 'stores.id', '=', 'listings.store_id')
            ->where('available', '>', 0)
            ->orderBy(DB::raw('RAND()'));
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
        return $this->hasMany(Listing::class);
    }

    public function rulings()
    {
        return $this->belongsToMany(Ruling::class);
    }

    public function newCollection(array $models = [])
    {
        return new Cards($models);
    }

    public static function register(Identifier $identifier, string $name, Rarity $rarity, string $text, $flavour, $comments, array $keywords, array $stats)
    {
        $searchText = "$identifier $name $text ".implode(' ', $keywords);

        return static::updateOrCreate(['identifier' => $identifier], compact('name', 'rarity', 'text', 'flavour', 'comments', 'keywords', 'stats', 'searchText'));
    }

    public function setIdentifierAttribute(Identifier $identifier)
    {
        $this->attributes['identifier'] = (string) $identifier;
    }

    public function getIdentifierAttribute(string $identifier)
    {
        return Identifier::fromString($identifier);
    }

    public function setRarityAttribute(Rarity $rarity)
    {
        $this->attributes['rarity'] = (string) $rarity;
    }

    public function getRarityAttribute(string $rarity)
    {
        return new Rarity($rarity);
    }

    public function isHero(): bool
    {
        return in_array('hero', $this->keywords);
    }

    public function isWeapon(): bool
    {
        return in_array('weapon', $this->keywords);
    }

    public function is1hWeapon()
    {
        return $this->isWeapon() && in_array('1h', $this->keywords);
    }

    public function isEquipment(): bool
    {
        return in_array('equipment', $this->keywords);
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
