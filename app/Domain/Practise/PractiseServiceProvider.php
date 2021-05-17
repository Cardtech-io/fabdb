<?php
namespace FabDB\Domain\Practise;

use FabDB\Providers\AppServiceProvider;

class PractiseServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        PractiseRepository::class => EloquentPractiseRepository::class,
        PackRepository::class => EloquentPackRepository::class,
    ];
}
