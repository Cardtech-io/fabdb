<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Cards\CardRepository;
use Illuminate\Database\Eloquent\Builder;

/**
 * Limits card results to those that are usable by the provided hero.
 */
class HeroFilter implements SearchFilter
{
    /**
     * @var CardRepository
     */
    private CardRepository $cards;

    public function __construct(CardRepository $cards)
    {
        $this->cards = $cards;
    }

    public function applies(array $input)
    {
        return isset($input['hero']);
    }

    public function applyTo(Builder $query, array $input)
    {
        $hero = $this->cards->findByIdentifier($input['hero']);
        $keywords = $hero->isTalented() ? array_slice($hero->keywords,0, 2) : [$hero->keywords[0]];
        $keywords[] = 'generic';
        
        $query->where(function($query) use ($keywords) {
            foreach ($keywords as $keyword) {
                $query->orWhereRaw("JSON_SEARCH(keywords, 'one', '$keyword') IS NOT NULL");
            }

            if (in_array('shapeshifter', $keywords)) {
                $query->orWhere('search_text', 'LIKE', '%specialization%');
            }
        });
    }
}
