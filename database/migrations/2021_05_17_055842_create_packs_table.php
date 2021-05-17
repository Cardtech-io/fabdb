<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('practise_id');
            $table->timestamp('created_at');
            $table->foreign('practise_id')->references('id')->on('practises')->cascadeOnDelete();
        });

        Schema::create('card_pack', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pack_id');
            $table->unsignedBigInteger('card_id');
            $table->foreign('pack_id')->references('id')->on('packs')->cascadeOnDelete();
            $table->foreign('card_id')->references('id')->on('cards')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('card_pack');
        Schema::dropIfExists('packs');
    }
}
