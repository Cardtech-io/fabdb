<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Identifier;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;

class MigrateRarerCardsToCorrectIdentifiers extends Command
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
    protected $description = 'Migrates all rarer cards away from the coloured identifier naming convention.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // This process updates all non-common, non-rare cards to ensure they do NOT have colored identifiers
        Card::whereNotIn('rarity', ['C', 'R'])->each(function($card) {
            $identifier = $card->identifier->raw();
            
            // The card matches a coloured identifier pattern
            if (preg_match('/(-(red|yellow|blue))$/', $identifier, $matches)) {
                $identifier = str_replace($matches[1], '', $identifier);
                
                $card->identifier = Identifier::fromString($identifier);
                $card->save();
            }
        });

        // This process does the inverse - it finds all common and rare cards that do not have colored identifiers, and adds them
        // Card::whereIn('rarity', ['C', 'R'])->each(function($card) {
        //     $identifier = $card->identifier->raw();
            
        //     // The card matches a coloured identifier pattern
        //     if (!preg_match('/(-(red|yellow|blue))$/', $identifier, $matches)) {
        //         $identifier = Identifier::fromName($card->name);

        //         if (!is_numeric($resource = Arr::get($card->stats, 'resource'))) return;

        //         $identifier = $identifier->raw().'-'.Identifier::resourceName($resource);
                
        //         $this->info($identifier);
                
        //         // $card->identifier = Identifier::fromString($identifier);
        //         // $card->save();
        //     }
        // });

        return 0;
    }
}
