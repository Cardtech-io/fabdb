<?php
namespace FabDB\Domain\Cards;

use FabDB\Providers\AppServiceProvider;

final class CardsServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        CardRepository::class => EloquentCardRepository::class
    ];
}
