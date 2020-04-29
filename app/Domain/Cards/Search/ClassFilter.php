<?php
namespace FabDB\Domain\Cards\Search;

class ClassFilter
{
    public function applies(array $input)
    {
        return isset($input['class']);
    }

    public function applyTo($query, array $input)
    {
        $query->whereRaw("JSON_SEARCH(keywords, 'one', '{$input['class']}') IS NOT NULL");
    }
}
