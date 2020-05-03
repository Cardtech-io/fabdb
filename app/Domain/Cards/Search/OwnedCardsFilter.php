<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Users\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class OwnedCardsFilter implements SearchFilter
{
    /**
     * @var User
     */
    private $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    public function applies(array $input)
    {
        return (bool) $this->user;
    }

    public function applyTo(Builder $query, array $input)
    {
        $view = Arr::get($input, 'view', 'all');

        switch (Arr::get($input, 'use-case')) {
            case 'collection':
                // if we're viewing the collection then it's a straight join, otherwise it's a left join
                // so that we can do a specific clause against missing cards from the collection.
                $join = in_array($view, ['all', 'need']) ? 'leftJoin' : 'join';
                break;
            default:
                $join = 'leftJoin';
        }

        $query->$join('owned_cards', function($join) {
            $join->on('owned_cards.card_id', '=', 'cards.id');
            $join->where('owned_cards.user_id', $this->user->id);
            $join->where(function($clause) {
                $clause->where('owned_cards.standard', '>', 0);
                $clause->orWhere('owned_cards.foil', '>', 0);
                $clause->orWhere('owned_cards.promo', '>', 0);
            });
        });

        // If their main search parameter is to find needed cards, then only show cards where there is no record of the owned card
        if ($view == 'need') {
            $query->where(function($clause) {
                $clause->whereNull('owned_cards.id');
                $clause->orWhereRaw('owned_cards.standard + owned_cards.foil + owned_cards.promo < '.(int) $this->user->need);
            });
        }

        $query->addSelect('owned_cards.standard', 'owned_cards.foil', 'owned_cards.promo');
    }
}