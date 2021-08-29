<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Users\User;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
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
        return true;
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->join('cards', 'cards.id', 'printings.card_id');

        if (isset($input['set'])) {
            $sets = explode(',', $input['set']);

            $query->where(function ($query) use ($sets) {
                foreach ($sets as $set) {
                    $query->orWhere('printings.sku', 'LIKE', $set.'%');
                }
            });
        }

        $query->leftJoin('owned_cards', function($join) {
            $join->on('owned_cards.printing_id', 'printings.id');
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
