<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeCollectionFields extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('owned_cards', function (Blueprint $table) {
            $table->renameColumn('total', 'standard');
        });

        Schema::table('owned_cards', function (Blueprint $table) {
            $table->integer('foil')->after('standard')->nullable()->default(0);
            $table->integer('promo')->after('foil')->nullable()->default(0);
            $table->integer('standard')->nullable()->default(0)->change();
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
            $table->renameColumn('standard', 'total');
        });
        Schema::table('owned_cards', function (Blueprint $table) {
            $table->dropColumn('foil');
            $table->dropColumn('promo');
        });
    }
}
