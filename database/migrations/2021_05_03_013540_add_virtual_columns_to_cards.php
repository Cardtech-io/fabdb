<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddVirtualColumnsToCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cards', function (Blueprint $table) {
            $talents = implode("','", array_keys(config('game.talents')));
            $classes = implode("','", array_keys(config('game.classes')));

            $table->string('talent')->after('keywords')->index()->nullable()->virtualAs("IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[0]')) IN ('$talents'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[0]')), NULL)");
            $table->string('class')->after('talent')->index()->nullable()->virtualAs("IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[0]')) IN ('$classes'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[0]')), IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[1]')) IN ('$classes'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[1]')), NULL))");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cards', function (Blueprint $table) {
            $table->dropColumn('talent');
            $table->dropColumn('class');
        });
    }
}
