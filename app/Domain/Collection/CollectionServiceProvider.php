<?php
namespace FabDB\Domain\Collection;

use FabDB\Providers\AppServiceProvider;

class CollectionServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        CollectionRepository::class => EloquentCollectionRepository::class,
    ];
}
