<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Cards\Boosters\CollectionBoosterRepository;
use FabDB\Domain\Cards\Boosters\BoosterRepository;
use FabDB\Providers\AppServiceProvider;
use Illuminate\Pagination\LengthAwarePaginator;

final class CardsServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        CardRepository::class => EloquentCardRepository::class,
        BoosterRepository::class => CollectionBoosterRepository::class,
        PrintingRepository::class => EloquentPrintingRepository::class,
    ];

    public function boot()
    {
        LengthAwarePaginator::currentPathResolver(function() {
            return '/';
        });
    }
}
