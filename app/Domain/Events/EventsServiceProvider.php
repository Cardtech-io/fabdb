<?php
namespace FabDB\Domain\Events;

use FabDB\Providers\AppServiceProvider;

class EventsServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        EventRepository::class => EloquentEventRepository::class,
    ];
}
