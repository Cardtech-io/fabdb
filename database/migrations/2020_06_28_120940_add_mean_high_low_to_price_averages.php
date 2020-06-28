<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMeanHighLowToPriceAverages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('price_averages', function (Blueprint $table) {
            $table->renameColumn('price', 'mean');
        });

        Schema::table('price_averages', function (Blueprint $table) {
            $table->decimal('high', 10, 2)->after('currency');
            $table->decimal('low', 10, 2)->after('mean');
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
            $table->renameColumn('mean', 'price');
        });

        Schema::table('price_averages', function (Blueprint $table) {
            $table->dropColumn(['low', 'high']);
        });
    }
}
