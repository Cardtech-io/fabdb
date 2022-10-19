<?php

use FabDB\Domain\Decks\Deck;
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
        Schema::table('decks', function (Blueprint $table) {
            $table->unsignedBigInteger('version_id')->after('id')->index();
            $table->tinyInteger('version')->after('version_id')->default(1)->index();
        });

        DB::update('UPDATE '.with(new Deck)->getTable().' SET version_id = id');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('decks', function (Blueprint $table) {
            $table->dropColumn('version_id', 'version');
        });
    }
};
