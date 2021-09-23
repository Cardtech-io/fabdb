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

        $query->where(function ($query) use ($talents) {
            foreach ($talents as $talent) {
                if ($talent === 'none') {
                    $query->whereNull('cards.talent');
                } else {
                    $query->orWhere('talent', $talent);
                }
            }
        });
    }
}
