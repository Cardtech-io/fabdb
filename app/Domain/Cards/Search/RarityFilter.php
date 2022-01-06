<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\MultiArrayFormats;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class RarityFilter implements SearchFilter
{
    use MultiArrayFormats;

    public function applies(array $input)
    {
        return Arr::get($input, 'rarity');
    }

    public function applyTo(Builder $query, array $input)
    {
        $rarities = $this->toArray($input['rarity']);

        $query->where(function($query) use ($rarities) {
            foreach ($rarities as $rarity) {
                $query->orWhere('printings.rarity', Str::upper($rarity));
            }
        });
    }
}
