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
                if ($hero->isTalented()) {
                    $talents = "'".implode("','", $hero->talents())."'";

                    $query->whereRaw("(cards.class IN ('{$hero->class}', 'generic') OR cards.class IS NULL) AND (cards.talent IN ($talents) OR cards.talent IS NULL)");
                }
                else {
                    $query->whereIn('cards.class', [$hero->class, 'generic']);
                    $query->whereNull('cards.talent');
                }
            });

            if ($hero->class === 'shapeshifter') {
                $query->orWhere('cards.search_text', 'LIKE', '%specialization%');
            }
        });
    }
}
