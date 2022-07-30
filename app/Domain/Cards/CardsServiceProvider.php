<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Cards\Boosters\ArcaneRising;
use FabDB\Domain\Cards\Boosters\Box;
use FabDB\Domain\Cards\Boosters\CollectionBoosterRepository;
use FabDB\Domain\Cards\Boosters\BoosterRepository;
use FabDB\Domain\Cards\Boosters\Monarch;
use FabDB\Domain\Cards\Boosters\TalesOfAria;
use FabDB\Domain\Cards\Boosters\Uprising;
use FabDB\Domain\Cards\Boosters\WelcomeToRathe;
use FabDB\Providers\AppServiceProvider;

final class CardsServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        ArtistRepository::class => EloquentArtistRepository::class,
        CardRepository::class => EloquentCardRepository::class,
        BoosterRepository::class => CollectionBoosterRepository::class,
        PrintingRepository::class => EloquentPrintingRepository::class,
    ];

    public function boot()
    {
        $this->app->bind(Box::class, function($app) {
            return new Box(
                $app->make(WelcomeToRathe::class),
                $app->make(ArcaneRising::class),
                $app->make(Monarch::class),
                $app->make(TalesOfAria::class),
                $app->make(Uprising::class),
            );
        });

        $this->app->bind(Banned::class, function($app) {
            return new Banned($app['config']->get('game.cards.banned'));
        });
    }
}
