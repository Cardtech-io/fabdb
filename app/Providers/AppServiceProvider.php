<?php
namespace FabDB\Providers;

use FabDB\Library\JobLogger;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\ServiceProvider;

abstract class AppServiceProvider extends ServiceProvider
{
    protected $interfaces = [];

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->bindImplementations();
    }

    public function boot()
    {
        app(Dispatcher::class)->pipeThrough([
            app(JobLogger::class)
        ]);
    }

    private function bindImplementations()
    {
        foreach ($this->interfaces as $interface => $implementation) {
            $this->app->bind($interface, $implementation);
        }
    }
}
