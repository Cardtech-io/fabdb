<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeCorrectionsPrintingsConstraint extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('corrections', function (Blueprint $table) {
            $table->dropForeign(['printing_id']);
            $table->foreign('printing_id')->references('id')->on('printings')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('corrections', function (Blueprint $table) {
            $table->dropForeign(['printing_id']);
            $table->foreign('printing_id')->references('id')->on('printings');
        });
    }
}
