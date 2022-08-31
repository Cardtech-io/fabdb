<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\Casts\CastsEdition;
use FabDB\Library\Casts\CastsRarity;
use FabDB\Library\Casts\CastsSku;
use FabDB\Library\Model;

class Printing extends Model
{
    protected $fillable = ['cardId', 'sku', 'set', 'rarity', 'edition', 'finish', 'language', 'name', 'text', 'flavour'];

    protected $casts = [
        'released_at' => 'date',
        'sku' => CastsSku::class,
        'rarity' => CastsRarity::class,
        'edition' => CastsEdition::class
    ];

    public $timestamps = false;

    public static function register(int $cardId, Sku $sku, $set, Rarity $rarity, Edition $edition, string $finish, string $language, string $name, $text, $flavour)
    {
        $text = (string) $text;
        $flavour = (string) $flavour;

        return static::updateOrCreate(['sku' => $sku], compact('cardId','set', 'rarity', 'edition', 'finish', 'language', 'name', 'text', 'flavour'));
    }

    public function card()
    {
        return $this->belongsTo(Card::class);
    }
}
