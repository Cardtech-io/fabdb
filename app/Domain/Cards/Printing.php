<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\Model;

class Printing extends Model
{
    protected $fillable = ['identifier', 'sku', 'released_at'];
    protected $casts = [
        'released_at' => 'date'
    ];

    public function getFinishAttribute()
    {
        
    }
}
