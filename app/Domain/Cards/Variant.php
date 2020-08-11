<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\Model;

class Variant extends Model
{
    public $timestamps = false;
    protected $fillable = ['card_id', 'variant_id'];

    public function card()
    {
        return $this->belongsTo(Card::class);
    }

    public function variation()
    {
        return $this->belongsTo(Card::class, 'variant_id');
    }
}
