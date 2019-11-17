<?php

namespace FabDB\Providers;

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

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    private function bindImplementations()
    {
        foreach ($this->interfaces as $interface => $implementation) {
            $this->app->bind($interface, $implementation);
        }
    }
}
