<?php
namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Users\User;
use FabDB\Library\Model;

class OwnedCard extends Model
{
    protected $fillable = [
        'total',
        'trade',
        'want',
        'standard',
        'foil',
        'promo'
    ];

    public static function add(int $userId, int $cardId, int $printingId, int $total, bool $trade, bool $want)
    {
        $owned = new OwnedCard(compact('total', 'trade', 'want'));
        $owned->cardId = $cardId;
        $owned->printingId = $printingId;
        $owned->userId = $userId;
        $owned->save();

        return $owned;
    }

    public function card()
    {
        return $this->belongsTo(Card::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function hasNone()
    {
        return !$this->total;
    }

    public function remove(int $total)
    {
        $new = $this->total - $total;

        if ($new < 0) $new = 0;

        $this->total = $new;

        if ($this->hasNone()) {
            $this->delete();
        } else {
            $this->save();
        }
    }
}
