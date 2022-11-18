<?php

namespace FabDB\Domain\Cards;

use FabDB\Library\Model;

class CardPrice extends Model
{
    public function card()
    {
        return $this->belongsTo(Card::class);
    }
}
