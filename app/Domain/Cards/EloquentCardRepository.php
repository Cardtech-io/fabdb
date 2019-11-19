<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\EloquentRepository;
use Illuminate\Database\Eloquent\Model;

class EloquentCardRepository extends EloquentRepository implements CardRepository
{
    protected function model(): Model
    {
        return new Card;
    }

    /**
     * Searches for a range of cards, that match the provided parameters.
     *
     * @param array $params
     * @param int $userId
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function search(array $params, int $userId = null)
    {
        $query = $this->newQuery();
        $query->select([
            'cards.identifier',
            'cards.name'
        ]);

        // The following condition and clause determines whether the user is looking for an individual card or not
        if (count($params) == 1 && preg_match('/([A-Z]{3})?([0-9]{1,3})/i', $params[0], $matches)) {
            $set = $matches[1] ?: 'WTR';
            $identifier = $set.str_pad($matches[2], 3, '0', STR_PAD_LEFT);

            $query->where('identifier', $identifier);
        } else {
            foreach ($params as $param) {
                $query->where(function($query) use ($param){
                    $query->orWhere('name', 'LIKE', "{$param}%");
                    $query->orWhereRaw("JSON_SEARCH(keywords, 'one', '{$param}') IS NOT NULL");
                });
            }
        }

        if ($userId) {
            $query->leftJoin('owned_cards', function($join) use ($userId) {
                $join->on('owned_cards.card_id', '=', 'cards.id');
                $join->where('owned_cards.user_id', $userId);
            });

            $query->addSelect(\DB::raw('owned_cards.total AS owned'));
        }

        return $query->paginate(12);
    }

    /**
     * Looks for a specific card, and includes the count of how many of that card the user may have.
     *
     * @param string $identifier
     * @param int $userId
     * @return
     */
    public function find(string $identifier, int $userId = null)
    {
        $select = [
            'cards.id',
            'cards.identifier',
            'cards.name',
            'cards.keywords',
            'cards.stats',
            'cards.text',
            $userId ? \DB::raw('owned_cards.total AS owned') : \DB::raw('0 AS owned')
        ];

        $query = $this->newQuery()
            ->whereIdentifier($identifier)
            ->select($select);

        if ($userId) {
            $query->leftJoin('owned_cards', function($join) use ($userId) {
                $join->on('owned_cards.card_id', '=', 'cards.id');
                $join->where('owned_cards.user_id', $userId);
            });
        }

        return $query->firstOrFail();
    }
}