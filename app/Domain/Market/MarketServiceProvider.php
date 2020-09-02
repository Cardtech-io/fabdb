<?php
namespace FabDB\Domain\Market;

use FabDB\Providers\AppServiceProvider;

class MarketServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        PriceAveragesRepository::class => EloquentPriceAveragesRepository::class
    ];
}
