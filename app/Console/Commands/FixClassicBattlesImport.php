<?php

namespace FabDB\Console\Commands;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Identifier;
use FabDB\Domain\Decks\DeckCard;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FixClassicBattlesImport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fabdb:fix-classic-battles';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fixes the classic battles bugs from the LSS data.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $cards = Card::select(DB::raw('cards.*'))->with('printings')
            ->join('printings', 'printings.card_id', '=', 'cards.id')
            ->where('printings.sku', 'LIKE', 'RVD%')
            ->orWhere('printings.sku', 'LIKE', 'DVR%')
            ->get();

        foreach ($cards as $card) {
            // If the identifier is different, it was incorrectly done to begin with
            if ($card->identifier->raw() == $this->identifier($card)) continue;

            $preferred = Card::where('cards.id', '!=', $card->id)
                ->whereIdentifier($this->identifier($card))
                ->first();

            // If no card, then it means there is no other version of the card, but we should update the card's identifier.
            if (!$preferred) {
                $card->identifier = Identifier::fromString($this->identifier($card));
                $card->save();
                continue;
            }

            // This means we have a preferred card, and we need to move its printing to the preferred card, and update all decks that work with this card.
            $printing = $card->printings->first();
            $printing->cardId = $preferred->id;
            $printing->save();

            // Now we find all deck cards that use this card
            DeckCard::whereCardId($card->id)->update(['card_id' => $preferred->id]);
            DB::update('UPDATE sideboard SET card_id = '.$preferred->id.' WHERE card_id = '.$card->id);
        }

        return 0;
    }

    private function identifier($card): string
    {
        return Str::lower(Str::slug($card->name)).$this->colorExtension($card);
    }

    private function colorExtension($card)
    {
        if (!in_array($card->rarity, ['C', 'R'])) return '';

        $colors = [
            '1' => 'red',
            '2' => 'yellow',
            '3' => 'blue',
        ];

        if (isset($card->stats['resource'])) {
            return '-'.$colors[$card->stats['resource']];
        }

        return '';
    }
}
