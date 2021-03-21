<?php

use FabDB\Domain\Users\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\QueryException;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class AddVanitySlugToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('vanity_slug')->after('slug')->nullable()->unique();
        });

        User::whereIn('subscription', ['legendary', 'fabled'])->each(function(User $user) {
            try {
                $user->vanitySlug = Str::slug($user->name);
                $user->save();
            } catch (QueryException $e) {}
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('vanity_slug');
        });
    }
}
