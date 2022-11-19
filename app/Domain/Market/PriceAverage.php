<?php
namespace FabDB\Domain\Market;

use FabDB\Library\Model;

class PriceAverage extends Model
{
    public $timestamps = false;

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->createdAt = $model->freshTimestamp();
        });
    }

    public static function list($cardId, string $currency, array $prices)
    {
        $priceAverage = new static;
        $priceAverage->cardId = $cardId;
        $priceAverage->currency = $currency;
        $priceAverage->low = number_format($prices['low'] ?? 0, 2);
        $priceAverage->mean = number_format($prices['mid'], 2);
        $priceAverage->high = number_format($prices['high'], 2);

        return $priceAverage;
    }
}
