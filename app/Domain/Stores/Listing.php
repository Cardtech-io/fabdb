<?php
namespace FabDB\Domain\Stores;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Clicks\Click;
use FabDB\Library\Model;

class Listing extends Model
{
    protected $fillable = ['store_id', 'card_id', 'printing_id', 'variant', 'price', 'path', 'available'];
    protected $hidden = ['id', 'storeId', 'cardId'];

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

    public static function register(int $store_id, int $card_id, int $printing_id, string $variant, $price, $path, $available)
    {
        $search = compact('store_id', 'card_id', 'printing_id', 'variant');
        $payload = compact('price', 'path', 'available');

        return self::updateOrCreate($search, $payload);
    }
}
