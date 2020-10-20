<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCurrentPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('current_prices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('card_id')->unsigned();
            $table->string('variant');
            $table->string('currency');
            $table->decimal('high_current', 10, 2);
            $table->decimal('mean_current', 10, 2);
            $table->decimal('low_current', 10, 2);
            $table->decimal('high_previous', 10, 2);
            $table->decimal('mean_previous', 10, 2);
            $table->decimal('low_previous', 10, 2);
            $table->unique(['card_id', 'variant', 'currency']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('current_prices');
    }
}
