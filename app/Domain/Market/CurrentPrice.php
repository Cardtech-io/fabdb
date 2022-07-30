<?php
namespace FabDB\Domain\Market;

use FabDB\Library\Casts\CastsSku;
use FabDB\Library\Model;

class CurrentPrice extends Model
{
    protected $casts = [
        'sku' => CastsSku::class,
        'low_current' => 'float',
        'low_previous' => 'float',
        'mean_current' => 'float',
        'mean_previous' => 'float',
        'high_current' => 'float',
        'high_previous' => 'float',
    ];

    protected $hidden = [
        'id',
        'card_id',
        'printing_id',
    ];
}
