<?php
namespace FabDB\Domain\Cards\Search;

class SetFilter
{
    public function applies(array $input)
    {
        return isset($input['set']) && $input['set'] != 'all';
    }

    public function applyTo($query, array $input)
    {
        $query->where('identifier', 'LIKE', $input['set'] . '%');
    }
}
