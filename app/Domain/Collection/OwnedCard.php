<?php
namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Users\User;
use FabDB\Library\Model;

class OwnedCard extends Model
{
    protected $fillable = [
        'card_id',
        'user_id',
        'printing_id',
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

    public function toggle($type)
    {
        $this->$type = !$this->$type;
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

        if ($this->hasNone() && !$this->listed()) {
            $this->delete();
        } else {
            $this->save();
        }
    }

    /**
     * Returns true if this owned card is listed, in that it's wanted or willing to be traded.
     *
     * @return bool
     */
    private function listed(): bool
    {
        return $this->trade || $this->want;
    }
}
