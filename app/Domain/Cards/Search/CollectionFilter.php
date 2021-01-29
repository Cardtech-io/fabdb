<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Users\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

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
        return (bool) $this->user;
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->with(['printings' => function($query) use ($input) {
            if (isset($input['set']) && $input['set'] != 'all') {
                $query->where('sku', 'LIKE', $input['set'].'%');
            }

            if (isset($input['view']) && $input['view'] === 'have') {
                $query->where('owned_cards.total', '>', 0);
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

        // The original join is in the printings filter
        $query->leftJoin('owned_cards', function($join) {
            $join->on('owned_cards.card_id', 'printings.card_id');
            $join->where('owned_cards.user_id', $this->user->id);
        });

        if (isset($input['view'])) {
            switch ($input['view']) {
                case 'need':
                    $query->addSelect(DB::raw('owned_cards.id AS owned_card_id, SUM(owned_cards.total) AS total_owned'));
                    $query->havingRaw("owned_card_id IS NULL OR total_owned < {$this->user->need}");
                    break;
                case 'have':
                    $query->whereNotNull('owned_cards.id');
                    break;
            }
        }
    }
}
