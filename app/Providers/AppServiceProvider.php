<?php
namespace FabDB\Providers;

use FabDB\Library\JobLogger;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Database\Events\QueryExecuted;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
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

        Validator::extend('alpha_spaces', function ($attribute, $value) {
            return preg_match('/^[\pL\s]+$/u', $value);
        });

        $this->logQueries();

        JsonResource::withoutWrapping();

        LengthAwarePaginator::currentPathResolver(function() {
            return '/';
        });
    }

    private function bindImplementations()
    {
        foreach ($this->interfaces as $interface => $implementation) {
            $this->app->bind($interface, $implementation);
        }
    }

    private function logQueries()
    {
        if (config('database.log')) {
            $path = storage_path().'/logs/query.log';

            DB::listen(function ($query) use ($path) {
                $sql = str_replace(['%', '?', "\n", "\r"], ['%%', "'%s'", ' ', ' '], $query->sql);
                $sql = vsprintf($sql, $query->bindings);
                $time_now = (new \DateTime)->format('Y-m-d H:i:s');
                $log = $time_now . ' | ' . $query->time . 'ms' . ' | ' . $sql . PHP_EOL;
                File::append($path, $log);
            });
        }
    }
}
