<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrintingsTable extends Migration
{
    /**
     * Run the migrations.
     * 
     * @return void
     */
    public function up()
    {
        Schema::create('printings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('card_id')->unsigned();
            $table->string('sku');
            $table->string('set')->index();
            $table->dateTime('released_at');
            $table->foreign('card_id')->references('id')->on('cards')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('printings');
    }
}
