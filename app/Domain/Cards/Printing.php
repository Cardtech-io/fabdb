<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\Model;

class Printing extends Model
{
    protected $fillable = ['identifier', 'sku', 'released_at'];
    protected $casts = ['released_at' => 'date', 'sku' => Sku::class];
    protected $appends = ['finish'];

    public function card()
    {
        return $this->belongsTo(Card::class);
    }

    public function getFinishAttribute()
    {
        return $this->sku->finish();
    }
}
