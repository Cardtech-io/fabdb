<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Cards\Search\BannedCardsFilter;
use FabDB\Domain\Cards\Search\ClassFilter;
use FabDB\Domain\Cards\Search\CostFilter;
use FabDB\Domain\Cards\Search\HeroFilter;
use FabDB\Domain\Cards\Search\IdentifierFilter;
use FabDB\Domain\Cards\Search\KeywordFilter;
use FabDB\Domain\Cards\Search\NameFilter;
use FabDB\Domain\Cards\Search\OrderFilter;
use FabDB\Domain\Cards\Search\CollectionFilter;
use FabDB\Domain\Cards\Search\PitchFilter;
use FabDB\Domain\Cards\Search\PrintingFilter;
use FabDB\Domain\Cards\Search\RarityFilter;
use FabDB\Domain\Cards\Search\RulingsFilter;
use FabDB\Domain\Cards\Search\SetFilter;
use FabDB\Domain\Cards\Search\StatFilter;
use FabDB\Domain\Cards\Search\SyntaxFilter;
use FabDB\Domain\Cards\Search\TalentFilter;
use FabDB\Domain\Cards\Search\TypeFilter;
use FabDB\Domain\Cards\Search\UseCollectionFilter;
use FabDB\Domain\Cards\Search\VariantsFilter;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Market\PriceAverage;
use FabDB\Domain\Users\User;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class EloquentCardRepository extends EloquentRepository implements CardRepository
{
    protected function model(): Model
    {
        return new Card;
    }

    /**
     * Searches for a range of cards, that match the provided parameters.
     *
     * @param User|null $user
     * @param array $input
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function search(?User $user, array $input)
    {
        $query = $this->newQuery();
        $query->groupBy('cards.id');

        $query->select([
            'cards.id',
            'cards.identifier',
            'cards.image',
            'cards.name',
            'cards.keywords',
            'cards.stats',
            'cards.text',
            'cards.rarity',
        ]);

        $filters = [
            new PrintingFilter,
            new KeywordFilter,
            new SyntaxFilter,
            new IdentifierFilter,
            new ClassFilter,
            new TalentFilter,
            new TypeFilter,
            new CostFilter,
            new PitchFilter,
            new RarityFilter,
            new CollectionFilter($user),
            new OrderFilter
        ];

        $this->applyFilters($query, $filters, $input);

        return $query;
    }

    /**
     * Looks for a specific card, and includes the count of how many of that card the user may have.
     *
     * @param string $identifier
     * @param int $userId
     * @return
     */
    public function findByIdentifier(string $identifier, int $userId = null)
    {
        $select = [
            'cards.id',
            'cards.identifier',
            'cards.image',
            'cards.name',
            'cards.rarity',
            'cards.keywords',
            'cards.stats',
            'cards.text',
            'cards.flavour',
            'cards.comments',
        ];

        $query = $this->newQuery()
            ->whereIdentifier($identifier)
            ->select($select);

        if ($userId) {
            $query->addSelect(['owned_cards.standard', 'owned_cards.foil']);
            $query->leftJoin('owned_cards', function($join) use ($userId) {
                $join->on('owned_cards.card_id', '=', 'cards.id');
                $join->where('owned_cards.user_id', $userId);
            });
        }

        return $query->firstOrFail();
    }

    public function view(string $identifier, array $related = []): Card
    {
        if (preg_match('/[A-Z]{3}[0-9]{3}/i', $identifier)) {
            $card = $this->findBySku($identifier);
        } else {
            $card = $this->findByIdentifier($identifier);
        }

        $card->next = $this->nextOrPrevCard($card, 'next')->identifier;
        $card->prev = $this->nextOrPrevCard($card, 'prev')->identifier;

        $card->load(array_merge(['rulings'], $related));

        return $card;
    }

    public function getFirstIdentifier(string $set): string
    {
        $identifier = $this->newQuery()
            ->where('identifier', 'LIKE', "$set%")
            ->select('identifier')
            ->orderBy('identifier', 'asc')
            ->limit(1)
            ->pluck('identifier')
            ->first();

        return str_split($identifier, 3)[1];
    }

    public function prices(array $params)
    {
        $order = Arr::get($params, 'order', 'name');
        $direction = Arr::get($params, 'direction', 'asc');

        $ordering = [
            'name' => 'name',
            'high' => 'current_high',
            'mean' => 'current_mean',
            'low' => 'current_low',
            'rarity' => 'rarity'
        ];

        $dates = PriceAverage::selectRaw('DISTINCT created_at')
            ->orderBy('created_at', 'desc')
            ->limit(2)
            ->pluck('created_at')
            ->toArray();

        $query = $this->newQuery()
            ->select(
                'cards.id',
                'cards.identifier',
                'cards.name',
                'cards.rarity',
                'cards.stats',
                'current.high AS current_high',
                'current.mean AS current_mean',
                'current.low AS current_low',
                'previous.high AS previous_high',
                'previous.mean AS previous_mean',
                'previous.low AS previous_low'
            )
            ->join('price_averages AS current', 'current.card_id', 'cards.id')
            ->leftJoin('price_averages AS previous', function($join) use ($dates) {
                $join->on('previous.card_id', 'current.card_id');
                $join->whereRaw('previous.currency = current.currency');
                $join->where('previous.created_at', object_get($dates, '1', $dates[0]));
            })
            ->where('current.currency', $params['currency'])
            ->where('current.created_at', $dates[0])
            ->orderBy($ordering[$order], $direction)
            ->orderBy('cards.identifier');

        if (isset($params['set']) && $params['set'] != 'all') {
            $query->where('identifier', 'LIKE', $params['set'].'%');
        }

        return $query;
    }

    private function nav(\Closure $exec)
    {
        try { return $exec(); }
        catch (ModelNotFoundException $e) {}
    }

    private function nextOrPrevCard(Card $current, $direction)
    {
        if ($direction == 'next') {
            $operator = '>';
            $order = 'ASC';
        } else {
            $operator = '<';
            $order = 'DESC';
        }

        $card = $this->newQuery()
            ->where(function($query) use ($current, $operator, $order) {
                if ($current->resourceful()) {
                    $query->where(function ($query) use ($current, $operator, $order) {
                        $query->whereName($current->name);
                        $query->whereRaw("JSON_EXTRACT(stats, '$.resource') $operator {$current->stats['resource']}");
                    });
                }
                $query->orWhere('name', $operator, $current->name);
            })
            ->orderBy('name', $order)
            ->orderByRaw("JSON_EXTRACT(stats, '$.resource') $order")
            ->first();

        if ($card) return $card;

        return $this->newQuery()
            ->orderBy('name', $order)
            ->first();
    }

    public function searchFirst(array $params)
    {
        $query = $this->newQuery();

        $query->select([
            'cards.id',
            'cards.identifier',
            'cards.name',
            'cards.image',
            'cards.keywords',
            'cards.stats',
            'cards.text',
            'cards.rarity',
        ]);

        $filters = [
            new NameFilter,
            new IdentifierFilter,
            new BannedCardsFilter,
            new PitchFilter,
            new RarityFilter,
            new RulingsFilter,
        ];

        $this->applyFilters($query, $filters, $params);

        return $query->first();
    }

    private function applyFilters($query, array $filters, $input)
    {
        foreach ($filters as $filter) {
            if ($filter->applies($input)) {
                $filter->applyTo($query, $input);
            }
        }
    }

    public function uniqueHeroes()
    {
        return $this->newQuery()
            ->select('cards.identifier', 'cards.name', 'cards.image', 'cards.keywords', 'cards.stats')
            ->join('printings', 'printings.card_id', 'cards.id')
            ->whereRaw("JSON_SEARCH(keywords, 'one', 'hero')")
            ->groupBy('cards.name')
            ->orderBy('cards.name')
            ->get();
    }

    public function buildSearch(User $user, Deck $deck, array $input)
    {
        $query = $this->newQuery();

        // Needed for some filters
        $input['use-case'] = 'build';

        $query->groupBy('cards.id');

        $query->select([
            'cards.identifier',
            'cards.name',
            'cards.image',
            'cards.keywords',
            'cards.stats',
            'cards.text',
            'cards.rarity',
            DB::raw("IF(JSON_EXTRACT(cards.keywords, '$[0]') = 'generic', 1, 0) AS build_order")
        ]);

        $filters = [
            new PrintingFilter,
            new KeywordFilter,
            new SyntaxFilter,
            new IdentifierFilter,
            new BannedCardsFilter,
            new VariantsFilter,
            new HeroFilter($this),
            new TypeFilter,
            new CostFilter,
            new PitchFilter,
            new RarityFilter,
            new OrderFilter,
            new UseCollectionFilter($user, $deck)
        ];

        $this->applyFilters($query, $filters, $input);

        return $query;
    }

    public function ad(string $identifier, string $currency): Card
    {
        return $this->newQuery()
            ->join('printings', 'printings.card_id', 'cards.id')
            ->select('cards.id', 'cards.identifier', 'cards.image', 'cards.name')
            ->with(['ad' => function($query) use ($currency) {
                $query->where('stores.currency', $currency);
            }])
            ->where('printings.sku', $identifier)->first();
    }

    private function findBySku(string $identifier)
    {
        $query = $this->newQuery()
            ->join('printings', 'printings.card_id', 'cards.id')
            ->where('sku', 'like', $identifier.'%')
            ->select([
                'cards.id',
                'cards.identifier',
                'cards.image',
                'cards.name',
                'cards.rarity',
                'cards.keywords',
                'cards.stats',
                'cards.text',
                'cards.flavour',
                'cards.comments',
            ]);

        return $query->firstOrFail();
    }
}
