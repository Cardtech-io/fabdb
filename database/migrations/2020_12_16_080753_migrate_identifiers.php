<?php

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\NullIdentifier;
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
            ->whereRaw("identifier REGEXP '(ARC|CRU|WTR)([0-9]{3})'")
            ->chunk(2500, function($cards) {
                foreach ($cards as $card) {
                    $identifier = Identifier::fromStats($card->name, $card->stats);

                    // see if a card already exists with the required identifier. Cards that are not updated
                    // with the new identifiers, will need to be removed at a later date (and their associated card
                    // ids across all resources updated).
                    $existing = Card::whereIdentifier($identifier->raw())->first();

                    if (!$existing) {
                        // update the card with the identifier, this will be the main card
                        $card->identifier = $identifier;
                        $card->save();
                    }
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
