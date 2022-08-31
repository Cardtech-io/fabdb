<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddVoteCountsToCommentsAndDecks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('decks', function (Blueprint $table) {
            $table->unsignedBigInteger('total_votes')->after('card_back')->index();
            $table->unsignedBigInteger('week_votes')->after('total_votes')->index();
        });

        Schema::table('comments', function (Blueprint $table) {
            $table->unsignedBigInteger('total_votes')->after('content')->index();
            $table->unsignedBigInteger('week_votes')->after('total_votes')->index();
        });

        DB::update("UPDATE comments JOIN votes ON votes.voteable_id = comments.id AND votes.voteable_type = 'FabDB\\\\Domain\\\\Comments\\\\Comment' SET comments.total_votes = (SELECT COUNT(votes.id) AS vote_count FROM votes WHERE votes.voteable_id = comments.id AND votes.voteable_type = 'FabDB\\\\Domain\\\\Comments\\\\Comment')");
        DB::update("UPDATE decks JOIN votes ON votes.voteable_id = decks.id AND votes.voteable_type = 'FabDB\\\\Domain\\\\Decks\\\\Deck' SET decks.total_votes = (SELECT COUNT(votes.id) AS vote_count FROM votes WHERE votes.voteable_id = decks.id AND votes.voteable_type = 'FabDB\\\\Domain\\\\Decks\\\\Deck')");

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('decks', function (Blueprint $table) {
            $table->dropColumn('total_votes');
            $table->dropColumn('week_votes');
        });

        Schema::table('comments', function (Blueprint $table) {
            $table->dropColumn('total_votes');
            $table->dropColumn('week_votes');
        });
    }
}
