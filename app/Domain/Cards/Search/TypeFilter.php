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
        $types = explode(',', $input['cardType']);

        $query->where(function($query) use ($types) {
            for ($i = 0; $i < count($types); $i++) {
                if ($types[$i] === 'non-attack action') {
                    $query->orWhere(function($query) {
                        $query->whereRaw("JSON_SEARCH(keywords, 'one', 'action') IS NOT NULL");
                        $query->whereRaw("JSON_SEARCH(keywords, 'one', 'attack') IS NULL");
                    });
                } else {
                    $splitType = explode(' ', $types[$i]);
                    $query->orWhere(function($query) use ($splitType) {
                        foreach ($splitType as $part) {
                            $query->whereRaw("JSON_SEARCH(keywords, 'one', '{$part}') IS NOT NULL");
                        }
                    });
                }
            }
        });
    }
}
