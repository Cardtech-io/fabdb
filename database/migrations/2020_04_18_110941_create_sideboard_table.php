<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSideboardTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sideboard', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('deck_card_id')->unsigned()->index();
            $table->bigInteger('deck_id')->unsigned()->index();
            $table->bigInteger('card_id')->unsigned()->index();
            $table->tinyInteger('total');
            $table->timestamps();
            $table->foreign('deck_card_id')->references('id')->on('deck_cards')->onDelete('cascade');
            $table->foreign('deck_id')->references('id')->on('decks')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sideboard');
    }
}
