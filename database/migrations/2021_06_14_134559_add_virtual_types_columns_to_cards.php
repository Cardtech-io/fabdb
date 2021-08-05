<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddVirtualTypesColumnsToCards extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cards', function (Blueprint $table) {
            $types = implode("','", config('game.types'));
            $subTypes = implode("','", config('game.sub_types'));

            $table->string('type')->after('class')->index()->nullable()->virtualAs("IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[1]')) IN ('$types'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[1]')), IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[2]')) IN ('$types'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[2]')), NULL))");
            $table->string('sub_type')->after('type')->index()->nullable()->virtualAs("IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[2]')) IN ('$subTypes'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[2]')), IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[3]')) IN ('$subTypes'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[3]')), NULL))");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cards', function (Blueprint $table) {
            $table->dropColumn('type');
            $table->dropColumn('sub_type');
        });
    }
}
