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
            $table->string('name')->index();
            $table->text('text');
            $table->text('flavour')->nullable();
            $table->enum('side', ['A', 'B'])->default('A');
        });

        DB::insert('INSERT INTO sides (card_id, printing_id, name, text, flavour) SELECT printings.card_id, printings.id, printings.name, printings.text, printings.flavour FROM printings');
        DB::update("INSERT INTO sides (card_id, printing_id, name, text, flavour, side) SELECT p2.card_id, p1.id, p2.name, p2.text, p2.flavour, 'B' FROM printings p1 JOIN printings p2 ON p2.backface_printing_id = p1.id WHERE p2.backface_printing_id IS NOT NULL");
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
