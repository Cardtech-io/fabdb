<?php
namespace FabDB\Domain\Cards;

use FabDB\Providers\AppServiceProvider;
use Illuminate\Pagination\LengthAwarePaginator;

final class CardsServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        CardRepository::class => EloquentCardRepository::class,
        PackRepository::class => EloquentPackRepository::class,
        PrintingRepository::class => EloquentPrintingRepository::class,
    ];

    public function boot()
    {
        LengthAwarePaginator::currentPathResolver(function() {
            return '/';
        });
    }
}
