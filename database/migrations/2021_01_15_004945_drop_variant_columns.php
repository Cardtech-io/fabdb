<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropVariantColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('price_averages', function (Blueprint $table) {
            $table->dropColumn('variant');
        });

        Schema::table('listings', function (Blueprint $table) {
            $table->dropColumn('variant');
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
            $table->enum('variant', ['regular', 'cold', 'rainbow']);
        });

        Schema::table('listings', function (Blueprint $table) {
            $table->enum('variant', ['regular', 'cold', 'rainbow']);
        });
    }
}
