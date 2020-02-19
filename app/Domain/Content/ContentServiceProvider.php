<?php
namespace FabDB\Domain\Content;

use FabDB\Providers\AppServiceProvider;

class ContentServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        ArticleRepository::class => EloquentArticleRepository::class,
        FeatureRepository::class => EloquentFeatureRepository::class,
    ];
}
