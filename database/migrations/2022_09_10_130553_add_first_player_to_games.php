<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFirstPlayerToGames extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('games', function (Blueprint $table) {
            $table->tinyInteger('first')->after('opposing_hero_id');
            $table->tinyInteger('turns')->after('first');
            $table->dropUnique(['deck_id', 'game_id']);
            $table->unique(['deck_id', 'game_id', 'first']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('games', function (Blueprint $table) {
            $table->dropUnique(['deck_id', 'game_id', 'first']);
            $table->dropColumn('first');
            $table->dropColumn('turns');
            $table->unique(['deck_id', 'game_id']);
        });
    }
}
