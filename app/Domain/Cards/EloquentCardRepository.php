<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

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
     * @param $class
     * @param $type
     * @param int $userId
     * @return \Illuminate\Database\Eloquent\Builder
     * @internal param bool $restrict If provided, will restrict results to only those owned by the user.
     */
    public function search(string $view, array $params, $class, $type, int $userId = null)
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

        if ($class) {
            $query->where(\DB::raw("JSON_EXTRACT(keywords, '$[0]')"), $class);
        }

        if ($type) {
            $type = explode(' ', $type);

            for ($i = 0; $i < count($type); $i++) {
                $index = $i + 1;
                $query->where(\DB::raw("JSON_EXTRACT(keywords, '$[$index]')"), $type[$i]);
            }
        }

        $requireMissing = Str::lower(Arr::get($params, 0)) == 'missing';

        if ($userId) {
            switch ($view) {
                case 'collection':
                    // if we're viewing the collection then it's a straight join, otherwise it's a left join
                    // so that we can do a specific clause against missing cards from the collection.
                    $join = $requireMissing ? 'leftJoin' : 'join';
                    break;
                default:
                    $join = 'leftJoin';
            }

            $query->$join('owned_cards', function($join) use ($userId) {
                $join->on('owned_cards.card_id', '=', 'cards.id');
                $join->where('owned_cards.user_id', $userId);
                $join->where(function($clause) {
                    $clause->where('owned_cards.standard', '>', 0);
                    $clause->orWhere('owned_cards.foil', '>', 0);
                    $clause->orWhere('owned_cards.promo', '>', 0);
                });
            });

            // If their main search parameter is to find missing cards, then only show cards where there is no record of the owned card
            if ($requireMissing) {
                $query->whereNull('owned_cards.id');
            }

            $query->addSelect('owned_cards.standard', 'owned_cards.foil', 'owned_cards.promo');
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