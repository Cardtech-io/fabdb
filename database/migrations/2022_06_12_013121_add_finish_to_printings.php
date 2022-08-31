<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFinishToPrintings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('printings', function (Blueprint $table) {
            $table->string('finish')->after('rarity');
        });

        \Illuminate\Support\Facades\DB::update("
            UPDATE printings SET finish = CASE
                WHEN sku REGEXP 'cf$' THEN 'Cold foil'
                WHEN sku REGEXP 'gf$' THEN 'Gold foil'
                WHEN sku REGEXP 'rf$' THEN 'Rainbow foil'
                WHEN rarity = 'MV' THEN 'Cold foil'
                ELSE 'Regular'
                END
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('printings', function (Blueprint $table) {
            $table->dropColumn('finish');
        });
    }
}
