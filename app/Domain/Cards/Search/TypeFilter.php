<?php
namespace FabDB\Domain\Cards\Search;

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
                        $query->whereRaw("JSON_EXTRACT(keywords, '$[1]') = 'action'");
                        $query->whereRaw("JSON_SEARCH(keywords, 'one', 'attack') IS NULL");
                    });
                } else {
                    $query->orWhereRaw("JSON_SEARCH(keywords, 'one', '{$types[$i]}') IS NOT NULL");
                }
            }
        });
    }
}
