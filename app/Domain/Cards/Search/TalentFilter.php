<?php

namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class TalentFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['talent']) && !empty($input['talent']);
    }

    public function applyTo(Builder $query, array $input)
    {
        $talents = Arr::flatten([explode(',', $input['talent'])]);

        if (in_array('none', $talents)) {
            return $query->whereNull('cards.talent');
        }

        $query->where(function ($query) use ($talents) {
            foreach ($talents as $talent) {
                $query->orWhere('talent', $talent);
            }
        });
    }
}
