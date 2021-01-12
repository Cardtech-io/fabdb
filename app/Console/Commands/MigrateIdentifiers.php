<?php
namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Cards\NullIdentifier;
use Illuminate\Console\Command;

class MigrateIdentifiers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:migrate-identifiers';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Migrates card identifiers to the new format.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Card::select('id', 'identifier', 'name', 'stats')
            ->whereRaw("identifier REGEXP '(ARC|CRU|WTR)([0-9]{3})'")
            ->chunk(2500, function($cards) {
                foreach ($cards as $card) {
                    $this->info("Migrating card with identifier [{$card->identifier->raw()}]");
                    $identifier = Identifier::generate($card->name, $card->stats);

                    // see if a card already exists with the required identifier. Cards that are not updated
                    // with the new identifiers, will need to be removed at a later date (and their associated card
                    // ids across all resources updated).
                    $existing = Card::whereIdentifier($identifier->raw())->first();

                    if (!$existing) {
                        $this->warn("No card exists for identifier [{$identifier->raw()}]");
                        // update the card with the identifier, this will be the main card
                        $card->identifier = $identifier;
                        $card->save();
                    }
                    else {
                        $this->info("Card exists for identifier [{$identifier->raw()}]");
                    }
                }
            });
    }
}
