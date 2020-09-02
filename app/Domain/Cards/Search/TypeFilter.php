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
        if ($input['cardType'] == 'non-attack action') {
            $query->whereRaw("JSON_EXTRACT(keywords, '$[1]') = 'action'");
            $query->whereRaw("JSON_EXTRACT(keywords, '$[2]') IS NULL");
        } else {
            $type = explode(' ', $input['cardType']);

            for ($i = 0; $i < count($type); $i++) {
                $query->whereRaw("JSON_SEARCH(keywords, 'one', '{$type[$i]}') IS NOT NULL");
            }
        }
    }
}
