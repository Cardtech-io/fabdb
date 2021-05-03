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
    private $cards;

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

        $query->where(function($query) use ($hero) {
            if ($hero->isTalented()) {
                $query->whereRaw("cards.class IN ('{$hero->class}', 'generic') OR (cards.class IS NULL AND (cards.talent = '{$hero->talent}' OR cards.talent IS NULL))");
            }
            else {
                $query->whereRaw("cards.class IN ('{$hero->class}', 'generic') AND cards.talent IS NULL");
                $query->whereNull('cards.talent');
            }
        });

        if ($hero->class === 'shapeshifter') {
            $query->orWhere('cards.search_text', 'LIKE', '%specialization%');
        }
    }
}
