<?php
namespace FabDB\Domain\Stores;

use FabDB\Providers\AppServiceProvider;

class StoresServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        StoreRepository::class => EloquentStoreRepository::class,
    ];
}
