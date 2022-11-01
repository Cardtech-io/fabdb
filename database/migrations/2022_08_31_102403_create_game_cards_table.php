<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_cards', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('game_id');
            $table->unsignedBigInteger('card_id');
            $table->unsignedMediumInteger('seen');
            $table->unsignedMediumInteger('pitched');
            $table->unsignedMediumInteger('played');
            $table->unsignedMediumInteger('blocked');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_cards');
    }
}
