<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentCardRepository extends EloquentRepository implements CardRepository
{
    protected function model(): Model
    {
        return new Card;
    }

    /**
     * Searches for a range of cards, that match the provided parameters.
     *
     * @param string $view
     * @param array $params
     * @param int $userId
     * @internal param bool $restrict If provided, will restrict results to only those owned by the user.
     */
    public function search(string $view, array $params, int $userId = null)
    {
        $query = $this->newQuery();
        $query->select([
            'cards.identifier',
            'cards.name',
            'cards.keywords',
            'cards.stats',
        ]);

        // The following condition and clause determines whether the user is looking for an individual card or not
        if (count($params) == 1 && preg_match('/([A-Z]{3})?([0-9]{1,3})/i', $params[0], $matches)) {
            $set = $matches[1] ?: 'WTR';
            $identifier = $set . str_pad($matches[2], 3, '0', STR_PAD_LEFT);

            $query->where('identifier', $identifier);
        } elseif (count($params) == 1 && $params[0] === 'missing') {
            // do nothing, check below.
        } else {
            foreach ($params as $param) {
                $param = strtolower($param);

                $query->where(function($query) use ($param){
                    $query->orWhere('name', 'LIKE', "%{$param}%");
                    $query->orWhereRaw("JSON_SEARCH(keywords, 'one', '{$param}') IS NOT NULL");
                });
            }
        }

        if ($userId) {
            $join = $view !== 'all' ? 'join' : 'leftJoin';

            $query->$join('owned_cards', function($join) use ($userId) {
                $join->on('owned_cards.card_id', '=', 'cards.id');
                $join->where('owned_cards.user_id', $userId);
                $join->where(function($clause) {
                    $clause->where('owned_cards.standard', '>', 0);
                    $clause->orWhere('owned_cards.foil', '>', 0);
                });
            });

            // If their main search parameter is to find missing cards, then only show cards where there is no record of the owned card
            if (count($params) == 1 && $params[0] === 'missing') {
                $query->whereNull('owned_cards.id');
            }

            $query->addSelect('owned_cards.standard', 'owned_cards.foil');
        }

        $query->orderBy('cards.identifier');

        return $query;
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
            'cards.rarity',
            'cards.keywords',
            'cards.stats',
            'cards.text',
        ];

        $query = $this->newQuery()
            ->whereIdentifier($identifier)
            ->select($select);

        if ($userId) {
            $query->addSelect(['owned_cards.standard', 'owned_cards.foil']);
            $query->leftJoin('owned_cards', function($join) use ($userId) {
                $join->on('owned_cards.card_id', '=', 'cards.id');
                $join->where('owned_cards.user_id', $userId);
            });
        }

        return $query->firstOrFail();
    }
}