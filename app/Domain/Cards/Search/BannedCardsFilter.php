<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Decks\Deck;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;

class BannedCardsFilter implements SearchFilter
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
        return isset($input['use-case']) && $input['use-case'] == 'build';
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->whereNotIn('cards.identifier', $this->banned());
    }

    private function banned()
    {
        if ($this->deck->format === 'open') {
            return [];
        }

        return array_keys(
            array_filter(
                config('game.cards.banned'),
                fn($formats) => in_array($this->deck->format, $formats)
            )
        );
    }
}
