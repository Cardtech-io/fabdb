<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTextFieldsAndLanguageToPrintings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('printings', function (Blueprint $table) {
            $table->string('language')->after('card_id')->index();
            $table->string('name')->after('language');
            $table->text('text')->after('name');
            $table->text('flavour')->after('text');
        });

        \Illuminate\Support\Facades\DB::insert("
            UPDATE printings INNER JOIN cards ON cards.id = printings.card_id
            SET
                printings.language = 'en',
                printings.name = cards.name,
                printings.text = cards.text,
                printings.flavour = cards.flavour
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('printings', function (Blueprint $table) {
            $table->dropColumn('language');
            $table->dropColumn('name');
            $table->dropColumn('text');
            $table->dropColumn('flavour');
        });
    }
}
