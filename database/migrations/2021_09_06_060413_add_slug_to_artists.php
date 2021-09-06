<?php

use FabDB\Domain\Cards\Artist;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSlugToArtists extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('artists', function (Blueprint $table) {
            $table->string('slug')->after('id')->nullable()->unique();
        });

        Artist::each(function(Artist $artist) {
            $artist->generateSlug();
            $artist->save();
        });

        DB::statement('ALTER TABLE artists MODIFY COLUMN slug VARCHAR(255) NOT NULL');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('artists', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
    }
}
