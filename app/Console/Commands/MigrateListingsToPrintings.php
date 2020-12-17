<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Finish;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Stores\Listing;
use Illuminate\Console\Command;

class MigrateListingsToPrintings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:migrate-listings';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Migrates listings, updating their data to reflect the correct printing of a card.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Listing::with('card')->chunk(50, function($listings) {
            foreach ($listings as $listing) {
                $identifier = Identifier::fromStats($listing->card->name, $listing->card->stats)->raw();

                // Now we need to find the first properly matching card that isn't a promo
                $card = Card::with(['printings'])
                    ->whereIdentifier($identifier)
                    ->first();

                if (!$card) {
                    $this->warn("No card found for identifier [{$identifier}]");
                    continue;
                }

                if ($card->printings->empty()) {
                    $this->warn("No printings found for card [$card->id] with identifier [$card->identifier]");
                    continue;
                }

                $printing = $card->printings->first(function($printing) use ($listing, $card) {
                    $finish = Finish::fromVariant($listing->variant);
                    return !$printing->sku->unlimited() && $printing->sku->finish()->equals($finish);
                });

                if (!$printing) {
                    $this->info("Could not find matching card for listing [$listing->id] with variant [$listing->variant]");
                } else {
                    $listing->cardId = $printing->cardId;
                    $listing->printingId = $printing->id;
                    $listing->save();
                    $this->info("Listing updated to card [$printing->cardId] from [$listing->cardId] using printing id [$printing->id]");
                }

            }
        });

        return 1;
    }

    private function variantToFinish(string $variant)
    {
        return Finish::fromVariant($variant);
    }
}
