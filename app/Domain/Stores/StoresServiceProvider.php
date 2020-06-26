<?php
namespace FabDB\Domain\Stores;

use FabDB\Providers\AppServiceProvider;

class StoresServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        ListingRepository::class => EloquentListingRepository::class,
        StoreRepository::class => EloquentStoreRepository::class,
    ];
}
