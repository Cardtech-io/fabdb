<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Cards\Banned;
use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class BannedCardsFilter implements SearchFilter
{
    public function __construct(private Collection $legallyAffectedCards, private ?Deck $deck = null) {}

    public function applies(array $input)
    {
        return isset($input['use-case']) && $input['use-case'] == 'build' && $this->deck->format !== 'open';
    }
    
    public function applyTo(Builder $query, array $input)
    {
        $query->whereNotIn('cards.id', $this->ignoreCards());
    }

    private function ignoreCards(): array
    {
        return $this->legallyAffectedCards
            ->filter(fn(Card $card) => in_array($this->deck->format, array_keys($card->legality)))
            ->map(fn(Card $card) => $card->id)
            ->toArray();
    }
}
