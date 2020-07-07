<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class IncreaseListingAvailabilityMaxSize extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('ALTER TABLE listings CHANGE available available INTEGER(5) UNSIGNED DEFAULT 0');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('listings', function (Blueprint $table) {
            DB::statement('ALTER TABLE listings CHANGE available available INTEGER(3) UNSIGNED DEFAULT 0');
        });
    }
}
