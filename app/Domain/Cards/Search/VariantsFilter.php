<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class VariantsFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return true;
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->with('variants');

        if (Arr::get($input, 'use-case') !== 'collection') {
            $query->doesntHave('variantOf');
        }
    }
}
