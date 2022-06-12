<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MakeRarityTwoCharsLong extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cards', function (Blueprint $table) {
            $table->string('rarity', 2)->change();
        });

        Schema::table('printings', function (Blueprint $table) {
            $table->string('rarity', 2)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cards', function (Blueprint $table) {
            $table->string('rarity', 1)->change();
        });

        Schema::table('printings', function (Blueprint $table) {
            $table->string('rarity', 1)->change();
        });
    }
}
