<?php

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Identifier;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MigrateIdentifiers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Card::select('id', 'name', 'stats')
            ->whereRaw("identifier REGEXP '^(ARC|CRU|IRA|WTR)([0-9]{3})'")
            ->chunk(2500, function($cards) {
                foreach ($cards as $card) {
                    $card->identifier = Identifier::fromStats($card->name, $card->stats);
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
        // do nothing, irreversible
    }
}
