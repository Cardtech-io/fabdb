<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\Casts\CastsEdition;
use FabDB\Library\Casts\CastsSku;
use FabDB\Library\Model;

class Printing extends Model
{
    protected $fillable = ['cardId', 'sku', 'set', 'edition'];
    protected $casts = ['released_at' => 'date', 'sku' => CastsSku::class, 'edition' => CastsEdition::class];
    public $timestamps = false;

    public static function register(int $cardId, Sku $sku, $set, Edition $edition)
    {
        return static::updateOrCreate(['sku' => $sku], compact('cardId','set', 'edition'));
    }

    public function card()
    {
        return $this->belongsTo(Card::class);
    }
}
