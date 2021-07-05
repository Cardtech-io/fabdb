<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Users\User;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class UseCollectionFilter implements SearchFilter
{
    /**
     * @var User
     */
    private $user;

    /**
     * @var Deck
     */
    private $deck;

    public function __construct(User $user, Deck $deck)
    {
        $this->user = $user;
        $this->deck = $deck;
    }

    public function applies(array $input)
    {
        // Only apply if a hard limit was set for the deck
        return $this->deck->limitToCollection === 1;
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->addSelect(DB::raw('COUNT(owned_cards.total) AS owned_total'));
        $query->addSelect(DB::raw('IFNULL(deck_cards.total, 0) AS deck_card_total'));

        $query->join('owned_cards', function($join) {
            $join->on('owned_cards.card_id', '=', 'cards.id');
            $join->where('owned_cards.user_id', $this->user->id);
        });

        $query->leftJoin('deck_cards', function($query) {
            $query->where('deck_cards.deck_id', '=', $this->deck->id);
            $query->where('deck_cards.card_id', '=', 'cards.id');
        });

        $query->havingRaw('deck_card_total <= owned_total');
    }
}
