<?php
namespace FabDB\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RedefineVirtual extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:redefine-virtual';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Redefines the virtual columns for cards table based on updated data.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Schema::table('cards', function(Blueprint $table) {
            $table->dropColumn('talent');
            $table->dropColumn('class');
        });

        Schema::table('cards', function(Blueprint $table) {
            $talents = implode("','", array_keys(config('game.talents')));
            $classes = implode("','", array_keys(config('game.classes')));

            $table->string('talent')->after('keywords')->index()->nullable()->virtualAs("IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[0]')) IN ('$talents'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[0]')), NULL)");
            $table->string('class')->after('talent')->index()->nullable()->virtualAs("IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[0]')) IN ('$classes'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[0]')), IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[1]')) IN ('$classes'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[1]')), NULL))");
        });

        return 0;
    }
}
