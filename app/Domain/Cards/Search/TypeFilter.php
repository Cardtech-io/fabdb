<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Support\Arr;

class TypeFilter
{
    public function applies(array $input)
    {
        return Arr::get($input, 'type');
    }

    public function applyTo($query, array $input)
    {
        $type = explode(' ', $input['type']);

        for ($i = 0; $i < count($type); $i++) {
            $query->whereRaw("JSON_SEARCH(keywords, 'one', '{$type[$i]}') IS NOT NULL");
        }
    }
}
