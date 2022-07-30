<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangePrintingIdOnCurrentPricesToNullable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('current_prices', function (Blueprint $table) {
            $table->unsignedBigInteger('printing_id')->nullable()->change();
        });

        Schema::table('price_averages', function (Blueprint $table) {
            $table->unsignedBigInteger('printing_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('current_prices', function (Blueprint $table) {
            $table->unsignedBigInteger('printing_id')->change();
        });

        Schema::table('price_averages', function (Blueprint $table) {
            $table->unsignedBigInteger('printing_id')->change();
        });
    }
}
