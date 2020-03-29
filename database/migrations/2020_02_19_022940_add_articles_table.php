<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id')->index();
            $table->char('slug', 8)->index();
            $table->string('title')->index();
            $table->string('image')->nullable();
            $table->string('excerpt');
            $table->text('content');
            $table->string('status')->default('draft');
            $table->dateTime('publish_at');
            $table->timestamps();
            $table->index(['status', 'publish_at']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
