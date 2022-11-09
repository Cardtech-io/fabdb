<?php

use FabDB\Domain\Cards\Card;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sides', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('card_id')->index();
            $table->unsignedBigInteger('printing_id')->index();
            $table->enum('side', ['A', 'B'])->default('A');
        });

        DB::insert('INSERT INTO sides (card_id, printing_id) SELECT printings.card_id, printings.id FROM printings');
        DB::update("UPDATE sides SET side = 'B' WHERE printing_id IN (
            SELECT p1.id FROM printings p1 JOIN printings p2 ON p2.id = p1.backface_printing_id WHERE p1.backface_printing_id IS NOT NULL
        )");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sides');
    }
};
