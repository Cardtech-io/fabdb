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
        $owned->userId = $userId;
        $owned->cardId = $cardId;
        $owned->printingId = $printingId;
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
        return !$this->standard && !$this->foil && !$this->promo;
    }

    public function remove(string $type, int $total)
    {
        $current = $this->$type;
        $new = $current - $total;

        if ($new < 0) $new = 0;

        $this->$type = $new;

        $this->save();
    }
}
