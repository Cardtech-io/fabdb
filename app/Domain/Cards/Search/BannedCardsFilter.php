<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Cards\Banned;
use FabDB\Domain\Decks\Deck;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;

class BannedCardsFilter implements SearchFilter
{
    /**
     * @var Deck
     */
    private $deck;

    public function __construct(?Deck $deck = null)
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
        if (!$this->deck || $this->deck->format === 'open') {
            return [];
        }

        return app(Banned::class)->{$this->deck->format}();
    }
}
