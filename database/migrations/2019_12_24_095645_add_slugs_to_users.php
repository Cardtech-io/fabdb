<?php

use Illuminate\Support\Facades\DB;
use FabDB\Domain\Users\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSlugsToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('slug', 8)->after('id')->nullable()->unique();
        });

        User::each(function(User $user) {
            $user->generateSlug();
            $user->save();
        });

        DB::statement('ALTER TABLE users MODIFY COLUMN slug CHAR(8) NOT NULL');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
    }
}
