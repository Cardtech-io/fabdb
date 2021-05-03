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

        // if hero talented, we want all cards that:
        // 1. match the hero's class or
        // 2. Have a generic class or
        // 3. Have no class or the hero's class but have a talent that matches the hero's talent.

        // If the hero is not talented
        // 1. match the hero's class or
        // 2. Have a generic class and
        // 3. talent is null
        $query->where(function($query) use ($hero) {
            if ($hero->isTalented()) {
                $query->whereIn('class', [$hero->class, 'generic', null]);

                $query->where(function($query) use ($hero) {
                    $query->where('talent', $hero->talent);
                    $query->orWhereNull('talent');
                });
            }
            else {
                $query->whereIn('class', [$hero->class, 'generic']);
                $query->whereNull('cards.talent');
            }
        });

        if ($hero->class === 'shapeshifter') {
            $query->orWhere('search_text', 'LIKE', '%specialization%');
        }
    }
}
