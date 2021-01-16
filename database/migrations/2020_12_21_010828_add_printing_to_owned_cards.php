<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPrintingToOwnedCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('owned_cards', function (Blueprint $table) {
            $table->unsignedInteger('printing_id')->nullable()->after('card_id')->index();
            $table->unsignedInteger('total')->after('user_id')->index();
            $table->boolean('trade')->after('total')->index();
            $table->boolean('want')->after('trade')->index();
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
            $table->dropColumn('printing_id', 'total', 'trade', 'want');
        });
    }
}
