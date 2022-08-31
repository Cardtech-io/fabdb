<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Decks\Deck;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class PauperFilter implements SearchFilter
{
    /**
     * @var Deck
     */
    private Deck $deck;

    public function __construct(Deck $deck)
    {
        $this->deck = $deck;
    }

    public function applies(array $input)
    {
        return $this->deck->label === 'pauper';
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->whereIn('printings.rarity', ['C', 'R', 'T']);
    }
}
