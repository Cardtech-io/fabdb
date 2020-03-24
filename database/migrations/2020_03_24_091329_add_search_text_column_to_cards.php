<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddSearchTextColumnToCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cards', function (Blueprint $table) {
            $table->text('search_text');
        });

        DB::statement('ALTER TABLE cards ADD FULLTEXT cards_search_index (search_text)');
        DB::statement('UPDATE cards SET search_text = CONCAT_WS(\' \', identifier, name, text, keywords)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cards', function (Blueprint $table) {
            $table->dropColumn('search_text');
        });
    }
}
