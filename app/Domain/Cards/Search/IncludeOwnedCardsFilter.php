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
        $query->addSelect(DB::raw("(SELECT SUM(owned_cards.total) FROM owned_cards WHERE owned_cards.card_id = cards.id AND owned_cards.user_id = {$this->user->id}) AS owned_total"));
    }
}
