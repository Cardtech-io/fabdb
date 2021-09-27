<?php

use FabDB\Domain\Decks\Deck;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AddHeroIdToDecks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('decks', function (Blueprint $table) {
            $table->unsignedBigInteger('hero_id')->after('user_id')->nullable();
            $table->foreign('hero_id')->references('id')->on('cards')->cascadeOnDelete();
        });

        DB::update("UPDATE decks SET hero_id = (
            SELECT cards.id FROM cards INNER JOIN deck_cards ON deck_cards.card_id = cards.id WHERE cards.type = 'hero' AND deck_cards.deck_id = decks.id LIMIT 1
        )");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('decks', function (Blueprint $table) {
            $table->dropColumn('hero_id');
        });
    }
}
