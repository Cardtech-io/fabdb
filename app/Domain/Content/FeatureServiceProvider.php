<?php
namespace FabDB\Domain\Content;

use FabDB\Providers\AppServiceProvider;

class FeatureServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        FeatureRepository::class => EloquentFeatureRepository::class,
    ];
}
