<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\Deck;
use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;

/**
 * Limits card results to those that are usable by the provided hero.
 */
class HeroFilter implements SearchFilter
{
    /**
     * @var CardRepository
     */
    private $cards;

    /**
     * @var Deck|null
     */
    private ?Deck $deck;

    public function __construct(CardRepository $cards, ?Deck $deck = null)
    {
        $this->cards = $cards;
        $this->deck = $deck;
    }

    public function applies(array $input)
    {
        return isset($input['hero']) && $this->deck->format !== 'open';
    }

    public function applyTo(Builder $query, array $input)
    {
        $hero = $this->cards->findByIdentifier($input['hero']);

        $query->where(function($query) use ($hero) {
            $query->where(function($query) use ($hero) {
                $classes = implode(',', $hero->classes);
                $query->orWhereRaw("JSON_OVERLAPS(cards.classes, '[$classes]')");
                $query->orWhereNull('cards.classes');
            });

            if ($hero->isTalented()) {
                $query->where(function($query) use ($hero) {
                    $talents = implode(',', $hero->talents);
                    $query->orWhereRaw('JSON_OVERLAPS(cards.talents, "['.$talents.']"');
                    $query->orWhereNull('cards.talents');
                });
            }

            if (in_array('shapeshifter', $hero->classes)) {
                $query->orWhere('cards.search_text', 'LIKE', '%specialization%');
            }
        });
    }
}
