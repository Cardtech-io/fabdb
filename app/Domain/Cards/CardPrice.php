<?php

namespace FabDB\Domain\Cards;

use FabDB\Library\Model;

class CardPrice extends Model
{
    protected $fillable = ['card_id', 'source', 'source_id', 'source_link', 'created_at', 'updated_at'];

    public function card()
    {
        return $this->belongsTo(Card::class);
    }
}
