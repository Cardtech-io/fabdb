<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Decks\Deck;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class UseSealedPoolFilter implements SearchFilter
{
    private Deck $deck;

    public function __construct(Deck $deck)
    {
        $this->deck = $deck;
    }

    public function applies(array $input)
    {
        // Only apply if a hard limit was set for the deck
        return !is_null($this->deck->practiseId);
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->addSelect(DB::raw('COUNT(card_pack.id) AS available'));

        $query->join('card_pack', function($join) {
            $join->on('card_pack.card_id', '=', 'cards.id');
        });

        $query->join('packs', 'packs.id', 'card_pack.pack_id');
        $query->where('packs.practise_id', $this->deck->practiseId);
    }
}
