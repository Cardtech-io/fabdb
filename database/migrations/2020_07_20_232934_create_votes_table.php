<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('votes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->char('slug', 8)->index();
            $table->string('voteable_type');
            $table->bigInteger('voteable_id');
            $table->bigInteger('user_id')->index();
            $table->tinyInteger('value')->default(1);
            $table->timestamps();
            $table->index(['voteable_type', 'voteable_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('votes');
    }
}
