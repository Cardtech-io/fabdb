<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\Model;

class Card extends Model
{
    public $timestamps = false;

    protected $casts = ['keywords' => 'array', 'stats' => 'array'];
    protected $fillable = ['identifier', 'name', 'rarity', 'text', 'keywords', 'stats'];
    protected $hidden = ['id'];
    protected $appends = ['total'];

    public static function register(Identifier $identifier, string $name, Rarity $rarity, string $text, array $keywords, array $stats)
    {
        return static::create(compact('identifier', 'name', 'rarity', 'text', 'keywords', 'stats'));
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

    public function isHero()
    {
        return in_array('hero', $this->keywords);
    }

    public function isWeapon()
    {
        return in_array('weapon', $this->keywords);
    }

    public function isEquipment()
    {
        return in_array('equipment', $this->keywords);
    }
}
