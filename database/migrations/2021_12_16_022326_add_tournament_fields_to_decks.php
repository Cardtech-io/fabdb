<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTournamentFieldsToDecks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('decks', function (Blueprint $table) {
            $table->string('player')->nullable()->after('user_id');
            $table->string('decklist')->nullable()->after('player')->index();
            $table->tinyInteger('result')->nullable()->after('decklist');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('decks', function (Blueprint $table) {
            $table->dropColumn('player');
            $table->dropColumn('decklist');
            $table->dropColumn('result');
        });
    }
}
