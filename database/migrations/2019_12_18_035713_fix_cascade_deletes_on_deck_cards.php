<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FixCascadeDeletesOnDeckCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('deck_cards', function (Blueprint $table) {
            $table->dropForeign(['deck_id']);
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
        Schema::table('deck_cards', function (Blueprint $table) {
            $table->dropForeign(['deck_id']);
            $table->foreign('deck_id')->references('id')->on('decks');
        });
    }
}
