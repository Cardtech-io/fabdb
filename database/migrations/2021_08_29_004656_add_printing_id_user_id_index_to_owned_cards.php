<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPrintingIdUserIdIndexToOwnedCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('owned_cards', function (Blueprint $table) {
            $table->index(['printing_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('owned_cards', function (Blueprint $table) {
            $table->dropIndex(['printing_id', 'user_id']);
        });
    }
}
