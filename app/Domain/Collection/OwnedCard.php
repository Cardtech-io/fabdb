<?php
namespace FabDB\Domain\Collection;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Users\User;
use FabDB\Library\Model;

class OwnedCard extends Model
{
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
}
