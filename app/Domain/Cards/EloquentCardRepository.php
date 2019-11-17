<?php
namespace FabDB\Domain\Cards;

class EloquentCardRepository implements CardRepository
{
    public function search(array $params)
    {
        $query = (new Card)->newQuery();

        // The following condition and clause determines whether the user is looking for an individual card or not
        if (count($params) == 1 && preg_match('/([A-Z]{3})?([0-9]{1,3})/i', $params[0], $matches)) {
            $set = $matches[1] ?: 'WTR';
            $identifier = $set.str_pad($matches[2], 3, '0', STR_PAD_LEFT);

            $query->where('identifier', $identifier);
        } else {
            $query->where(function($query) use ($params){
                foreach ($params as $param) {
                    $query->orWhere('name', 'LIKE', "{$param}%");
                    $query->orWhereRaw("JSON_SEARCH(keywords, 'one', '{$param}') IS NOT NULL");
                }
            });
        }

        return $query->paginate(12);
    }
}