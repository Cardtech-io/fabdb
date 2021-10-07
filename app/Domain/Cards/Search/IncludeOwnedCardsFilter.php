<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Users\User;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class IncludeOwnedCardsFilter implements SearchFilter
{
    /**
     * @var User|null
     */
    private $user;

    public function __construct(?User $user)
    {
        $this->user = $user;
    }

    public function applies(array $input)
    {
        return (bool) $this->user;
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->addSelect(DB::raw('SUM(owned_cards.total) AS owned_total'));

        $query->leftJoin('owned_cards', function($join) {
            $join->on('owned_cards.card_id', '=', 'cards.id');
            $join->where('owned_cards.user_id', '=', $this->user->id);
        });
    }
}
