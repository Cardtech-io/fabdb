<?php

namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\MultiArrayFormats;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class TalentFilter implements SearchFilter
{
    use MultiArrayFormats;

    public function applies(array $input)
    {
        return isset($input['talent']) && !empty($input['talent']);
    }

    public function applyTo(Builder $query, array $input)
    {
        $talents = $this->toArray($input['talent']);

        $query->where(function ($query) use ($talents) {
            foreach ($talents as $talent) {
                if ($talent === 'none') {
                    $query->whereNull('cards.talents');
                } else {
                    $query->orWhereJsonContains('cards.talents', $talent);
                }
            }
        });
    }
}
