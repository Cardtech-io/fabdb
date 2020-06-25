<?php
namespace FabDB\Domain\Stores;

use FabDB\Library\Model;

class Listing extends Model
{
    protected $fillable = ['store_id', 'card_id', 'variant', 'price', 'path'];
    protected $hidden = ['id', 'store_id', 'card_id'];

    public function store()
    {
        return $this->belongsTo(Store::class);
    }

    public static function register(int $storeId, int $cardId, string $variant, $price, $path)
    {
        return self::updateOrCreate(['store_id' => $storeId, 'card_id' => $cardId, 'variant' => $variant], compact('price', 'path'));
    }
}
