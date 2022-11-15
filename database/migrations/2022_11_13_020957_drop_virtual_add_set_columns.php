<?php

use FabDB\Domain\Cards\Card;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cards', function (Blueprint $table) {
            $table->dropColumn('talent');
            $table->dropColumn('class');
            $table->dropColumn('type');
            $table->dropColumn('sub_type');
        });

        Schema::table('cards', function (Blueprint $table) {
            $table->json('talents')->nullable()->after('keywords');
            $table->json('classes')->nullable()->after('talents');
            $table->string('type')->after('classes');
            $table->json('sub_types')->nullable()->after('classes');
        });

        Card::chunk(100, function($cards) {
            foreach ($cards as $card) {
                $classes = array_values(array_intersect($card->keywords, array_keys(config('game.classes'))));
                $talents = array_values(array_intersect($card->keywords, array_keys(config('game.talents'))));

                if (empty($classes)) $classes = null;
                if (empty($talents)) $talents = null;

                // there is no subtype when it's a reaction
                if (in_array('reaction', $card->keywords)) {
                    $subTypes = [];
                    $type = implode(' ', array_slice($card->keywords, -2, 2));
                }
                else {
                    $subTypes = array_values(array_intersect($card->keywords, config('game.sub_types')));

                    if (empty($subTypes)) $subTypes = null;

                    $type = array_intersect($card->keywords, config('game.types'));
                    $type = array_pop($type);
                }

                $card->classes = $classes;
                $card->talents = $talents;
                $card->type = $type;
                $card->subTypes = $subTypes;

                $card->save();
            }
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
            $table->dropColumn('talents');
            $table->dropColumn('classes');
            $table->dropColumn('sub_types');
        });

        Schema::table('cards', function (Blueprint $table) {
            $talents = implode("','", array_keys(config('game.talents')));
            $classes = implode("','", array_keys(config('game.classes')));

            $table->string('sub_type');
            $table->string('talent')->after('keywords')->index()->nullable()->virtualAs("IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[0]')) IN ('$talents'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[0]')), NULL)");
            $table->string('class')->after('talent')->index()->nullable()->virtualAs("IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[0]')) IN ('$classes'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[0]')), IF(JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[1]')) IN ('$classes'), JSON_UNQUOTE(JSON_EXTRACT(keywords, '$[1]')), NULL))");
        });
    }
};
