<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPrintingIdToAverages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('price_averages', function (Blueprint $table) {
            $table->bigInteger('printing_id')->unsigned()->after('card_id')->index();
        });

        Schema::table('current_prices', function (Blueprint $table) {
            $table->bigInteger('printing_id')->unsigned()->after('card_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('price_averages', function (Blueprint $table) {
            $table->dropColumn('printing_id');
        });

        Schema::table('current_prices', function (Blueprint $table) {
            $table->dropColumn('printing_id');
        });
    }
}
