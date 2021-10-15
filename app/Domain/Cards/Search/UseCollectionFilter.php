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
        return in_array($this->deck->limitToCollection, [1, 2]);
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->addSelect(DB::raw("(SELECT SUM(owned_cards.total) FROM owned_cards WHERE owned_cards.card_id = cards.id AND owned_cards.user_id = {$this->user->id}) AS owned_total"));
        $query->addSelect(DB::raw('IFNULL(deck_cards.total, 0) AS deck_card_total'));

        $query->leftJoin('deck_cards', function($query) {
            $query->where('deck_cards.deck_id', '=', $this->deck->id);
            $query->where('deck_cards.card_id', '=', 'cards.id');
        });

        // hard limit
        if ($this->deck->limitToCollection === 1) {
            $query->havingRaw('deck_card_total <= owned_total');
        }
    }
}
