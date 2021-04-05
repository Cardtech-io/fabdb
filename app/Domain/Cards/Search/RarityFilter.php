<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class RarityFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return Arr::get($input, 'rarity');
    }

    public function applyTo(Builder $query, array $input)
    {
        $rarities = explode(',', $input['rarity']);

        $query->where(function($query) use ($rarities) {
            foreach ($rarities as $rarity) {
                $query->orWhere('printings.rarity', Str::upper($rarity));
            }
        });

    }
}
