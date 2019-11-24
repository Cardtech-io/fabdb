<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeckCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deck_cards', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('deck_id')->unsigned()->index();
            $table->bigInteger('card_id')->unsigned();
            $table->tinyInteger('total');
            $table->timestamps();
            $table->foreign('deck_id')->references('id')->on('decks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('deck_cards');
    }
}
