<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class TypeFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return Arr::get($input, 'cardType');
    }

    public function applyTo(Builder $query, array $input)
    {
        $types = $this->cardTypes($input['cardType']);

        $query->where(function($query) use ($types) {
            for ($i = 0; $i < count($types); $i++) {
                if ($types[$i] === 'attack action') {
                    $query->orWhere(function($query) {
                        $query->where('cards.sub_type', 'attack');
                    });
                } else {
                    $splitType = explode(' ', $types[$i]);

                    $query->where('cards.type', $splitType[0]); 

                    if (count($splitType) == 2) {
                        $query->where('cards.sub_type', $splitType[1]); 
                    }
                }
            }
        });
    }

    /**
     * Fetches and filters types to ensure no invalid/empty type values are provided.
     */
    private function cardTypes($cardType)
    {
        $types = !is_array($cardType) ? explode(',', $cardType) : $cardType;

        return array_filter($types);
    }
}
