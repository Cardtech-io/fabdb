<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRulingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rulings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('description');
            $table->string('source');
            $table->timestamps();
        });

        Schema::create('card_ruling', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('card_id');
            $table->unsignedBigInteger('ruling_id');
            $table->foreign('card_id')->references('id')->on('cards')->onDelete('cascade');
            $table->foreign('ruling_id')->references('id')->on('rulings')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('card_ruling');
        Schema::dropIfExists('rulings');
    }
}
