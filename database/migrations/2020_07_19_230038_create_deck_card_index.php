<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeckCardIndex extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('deck_cards', function (Blueprint $table) {
            $table->index(['deck_id', 'card_id']);
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
            $table->dropIndex(['deck_id', 'card_id']);
        });
    }
}
