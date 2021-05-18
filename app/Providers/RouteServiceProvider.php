<?php

namespace FabDB\Providers;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\PrintingRepository;
use FabDB\Domain\Content\ArticleRepository;
use FabDB\Domain\Decks\DeckRepository;
use FabDB\Domain\Events\EventRepository;
use FabDB\Domain\Practise\PractiseRepository;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'FabDB\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        // Model bindings
        Route::bind('article', function($slug) {
            return app(ArticleRepository::class)->view($slug);
        });

        Route::bind('card', function($identifier) {
            return app(CardRepository::class)->findByIdentifier($identifier, @Auth::user()->id);
        });

        Route::bind('deck', function($slug) {
            return app(DeckRepository::class)->bySlugWithCards($slug, true);
        });

        Route::bind('event', function($slug) {
            return app(EventRepository::class)->view($slug, @Auth::user()->id);
        });

        Route::bind('practise', function($slug) {
            return app(PractiseRepository::class)->view($slug);
        });

        Route::bind('printing', function($sku) {
            return app(PrintingRepository::class)->findBySku($sku);
        });
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();
        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::domain($this->app['config']->get('app.domain'))
            ->namespace($this->namespace)
            ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::domain($this->app['config']->get('api.domain'))
             ->namespace($this->namespace.'\Api')
             ->group(base_path('routes/api.php'));
    }
}
