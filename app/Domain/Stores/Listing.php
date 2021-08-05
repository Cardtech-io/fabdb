<?php
namespace FabDB\Domain\Stores;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Clicks\Click;
use FabDB\Library\Casts\CastsSku;
use FabDB\Library\Model;

class Listing extends Model
{
    protected $fillable = ['store_id', 'card_id', 'printing_id', 'variant_id', 'price', 'path', 'available'];
    protected $hidden = ['storeId', 'cardId'];
    protected $casts = ['sku' => CastsSku::class];

    public function card()
    {
        return $this->belongsTo(Card::class);
    }

    public function clicks()
    {
        return $this->morphMany(Click::class, 'clickable');
    }

    public function store()
    {
        return $this->belongsTo(Store::class);
    }

    public static function register(int $store_id, int $card_id, int $printing_id, $variant_id, $price, $path, $available)
    {
        $search = compact('store_id', 'card_id', 'printing_id');
        $payload = compact('price', 'path', 'available', 'variant_id');

        return self::updateOrCreate($search, $payload);
    }
}
