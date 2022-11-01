<?php

namespace FabDB\Domain\Games;

use FabDB\Providers\AppServiceProvider;

final class GamesServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        GameRepository::class => EloquentGameRepository::class
    ];
}
