<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Decks\Deck;
use FabDB\Library\Search\MultiArrayFormats;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class RarityFilter implements SearchFilter
{
    use MultiArrayFormats;

    /**
     * @var Deck|null
     */
    private ?Deck $deck;

    public function __construct(?Deck $deck = null)
    {
        $this->deck = $deck;
    }

    public function applies(array $input)
    {
        return Arr::get($input, 'rarity') || $this->deck;
    }

    public function applyTo(Builder $query, array $input)
    {
        $rarities = array_filter($this->toArray(Arr::get($input, 'rarity')));

        if ($this->deck && $this->deck->format === 'commoner') {
            $commoner = ['c', 'r'];
            $rarities = array_merge($rarities, $commoner);
        }

        if (!$rarities) return;

        $query->where(function($query) use ($rarities) {
            foreach ($rarities as $rarity) {
                $query->orWhere('printings.rarity', Str::upper($rarity));
            }
        });
    }
}
