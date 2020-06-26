<?php
namespace FabDB\Domain\Stores;

use FabDB\Domain\Clicks\Click;
use FabDB\Library\Model;

class Listing extends Model
{
    protected $fillable = ['store_id', 'card_id', 'variant', 'price', 'path', 'available'];
    protected $hidden = ['store_id', 'card_id'];

    public function clicks()
    {
        return $this->morphMany(Click::class, 'clickable');
    }

    public function store()
    {
        return $this->belongsTo(Store::class);
    }

    public static function register(int $storeId, int $cardId, string $variant, $price, $path, $available)
    {
        return self::updateOrCreate(['store_id' => $storeId, 'card_id' => $cardId, 'variant' => $variant], compact('price', 'path', 'available'));
    }
}
