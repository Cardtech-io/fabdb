<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddCardNumberToPrintings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('printings', function (Blueprint $table) {
            $table->string('number')->after('flavour')->index();
        });

        DB::update("UPDATE printings SET number = REGEXP_REPLACE(sku, '(-[a-z]+)$', '')");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('printings', function (Blueprint $table) {
            $table->dropColumn('number');
        });
    }
}
