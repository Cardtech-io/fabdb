<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Cards\Cards;
use FabDB\Domain\Comments\Comment;
use FabDB\Library\Model;

class Card extends Model
{
    public $timestamps = false;

    protected $casts = ['keywords' => 'array', 'stats' => 'array'];
    protected $fillable = ['identifier', 'name', 'rarity', 'text', 'flavour', 'keywords', 'stats', 'searchText'];
    protected $hidden = ['id'];
    protected $appends = ['total'];

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function newCollection(array $models = [])
    {
        return new Cards($models);
    }

    public static function register(Identifier $identifier, string $name, Rarity $rarity, string $text, $flavour, array $keywords, array $stats)
    {
        $searchText = "$identifier $name $text ".implode(' ', $keywords);

        return static::updateOrCreate(['identifier' => $identifier], compact('name', 'rarity', 'text', 'flavour', 'keywords', 'stats', 'searchText'));
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

    public function getTotalAttribute()
    {
        return $this->pivot ? $this->pivot->total : 0;
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
}
