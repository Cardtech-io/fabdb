<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePractiseTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('practises', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->index();
            $table->char('slug', 8)->index();
            $table->string('format');
            $table->string('set');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        });

        Schema::create('practise_cards', function(Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('practise_id')->index();
            $table->tinyInteger('pack');
            $table->unsignedBigInteger('card_id');
            $table->timestamp('created_at');
            $table->foreign('card_id')->references('id')->on('cards')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('practises');
        Schema::dropIfExists('practise_cards');
    }
}
