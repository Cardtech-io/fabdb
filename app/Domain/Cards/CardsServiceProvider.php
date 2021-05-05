<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Cards\Boosters\CollectionPackRepository;
use FabDB\Domain\Cards\Boosters\PackRepository;
use FabDB\Providers\AppServiceProvider;
use Illuminate\Pagination\LengthAwarePaginator;

final class CardsServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        CardRepository::class => EloquentCardRepository::class,
        PackRepository::class => CollectionPackRepository::class,
        PrintingRepository::class => EloquentPrintingRepository::class,
    ];

    public function boot()
    {
        LengthAwarePaginator::currentPathResolver(function() {
            return '/';
        });
    }
}
