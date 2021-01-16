<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Users\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class CollectionFilter implements SearchFilter
{
    /**
     * @var User
     */
    private $user;

    public function __construct(?User $user)
    {
        $this->user = $user;
    }

    public function applies(array $input)
    {
        return (bool) $this->user && Arr::get($input, 'use-case') === 'collection';
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->with(['printings' => function($query) use ($input) {
            if (isset($input['set'])) {
                $query->where('sku', 'LIKE', $input['set'].'%');
            }

            $query->select(
                'printings.id',
                'printings.card_id',
                'printings.sku',
                'printings.set',
                'owned_cards.total',
                'owned_cards.trade',
                'owned_cards.want'
            );
            $query->leftJoin('owned_cards', function($join) {
                $join->on('owned_cards.printing_id', 'printings.id');
                $join->where('owned_cards.user_id', $this->user->id);
            });
            $query->orderBy('printings.sku');
        }]);
    }
}
