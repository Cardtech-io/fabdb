<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Cards\Search\BannedCardsFilter;
use FabDB\Domain\Cards\Search\ClassFilter;
use FabDB\Domain\Cards\Search\CommonerFilter;
use FabDB\Domain\Cards\Search\CostFilter;
use FabDB\Domain\Cards\Search\ExactNamefilter;
use FabDB\Domain\Cards\Search\HeroFilter;
use FabDB\Domain\Cards\Search\IdentifierFilter;
use FabDB\Domain\Cards\Search\IncludeOwnedCardsFilter;
use FabDB\Domain\Cards\Search\KeywordFilter;
use FabDB\Domain\Cards\Search\NameFilter;
use FabDB\Domain\Cards\Search\OrderFilter;
use FabDB\Domain\Cards\Search\PauperFilter;
use FabDB\Domain\Cards\Search\PitchFilter;
use FabDB\Domain\Cards\Search\PrintingFilter;
use FabDB\Domain\Cards\Search\RarityFilter;
use FabDB\Domain\Cards\Search\RulingsFilter;
use FabDB\Domain\Cards\Search\StatFilter;
use FabDB\Domain\Cards\Search\SyntaxFilter;
use FabDB\Domain\Cards\Search\TalentFilter;
use FabDB\Domain\Cards\Search\TypeFilter;
use FabDB\Domain\Cards\Search\UseCollectionFilter;
use FabDB\Domain\Cards\Search\UseSealedPoolFilter;
use FabDB\Domain\Cards\Search\VariantsFilter;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Market\PriceAverage;
use FabDB\Domain\Users\User;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Contracts\Cache\Repository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class EloquentCardRepository extends EloquentRepository implements CardRepository
{
    /**
     * @var Repository
     */
    private $cache;

    public function __construct(Repository $cache)
    {
        $this->cache = $cache;
    }

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
        $query->with('currentPrice');
        $query->groupBy('cards.id');

        $query->select([
            'cards.id',
            'cards.price_id',
            'cards.identifier',
            'cards.image',
            'cards.name',
            'cards.legality',
            'cards.keywords',
            'cards.stats',
            'cards.text',
            'cards.rarity',
            'cards.price',
            'cards.last_price',
        ]);

        $filters = [
            new PrintingFilter,
            new SyntaxFilter,
            new IdentifierFilter,
            new IncludeOwnedCardsFilter($user),
            new ClassFilter,
            new TalentFilter,
            new TypeFilter,
            new CostFilter,
            new PitchFilter,
            new RarityFilter,
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
            'cards.price_id',
            'cards.artist_id',
            'cards.identifier',
            'cards.image',
            'cards.name',
            'cards.legality',
            'cards.rarity',
            'cards.keywords',
            'cards.stats',
            'cards.talents',
            'cards.classes',
            'cards.text',
            'cards.flavour',
            'cards.comments',
            'cards.type',
            'cards.sub_types',
            'cards.price',
            'cards.last_price',
        ];

        $query = $this->newQuery()
            ->with(['artist', 'currentPrice'])
            ->whereIdentifier($identifier)
            ->select($select);

        if ($userId) {
            $query->addSelect(['owned_cards.standard', 'owned_cards.foil']);
            $query->leftJoin('owned_cards', function ($join) use ($userId) {
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
            ->where('id', '!=', $current->id)
            ->where(function ($query) use ($current, $operator, $order) {
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
        $query1 = $this->newQuery();
        $query2 = $this->newQuery();
        $columns = [
            'cards.id',
            'cards.identifier',
            'cards.name',
            'cards.image',
            'cards.keywords',
            'cards.stats',
            'cards.text',
            'cards.rarity',
        ];

        $query1->select($columns);
        $query2->select($columns);

        $this->applyFilters($query1, [
            new ExactNamefilter
        ], $params);

        $result = $query1->first();

        if ($result) {
            return $result;
        }

        $filters = [
            new NameFilter,
            new IdentifierFilter,
            new RulingsFilter,
        ];

        $this->applyFilters($query2, $filters, $params);

        return $query2->first();
    }

    public function uniqueHeroes()
    {
        $heroes = $this->cache->get('cards.uniqueHeroes');

        if (!$heroes) {
            $heroes = $this->newQuery()
                ->select('cards.identifier', 'printings.sku', 'cards.name', 'cards.image', 'cards.keywords', 'cards.stats', 'cards.type', 'cards.sub_types')
                ->join('printings', 'printings.card_id', 'cards.id')
                ->where("cards.type", 'hero')
                ->groupBy('cards.name')
                ->orderBy('cards.name')
                ->get();

            $this->cache->put('cards.uniqueHeroes', $heroes, 60 * 60 * 24);
        };

        return $heroes;
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
            'cards.classes',
            'cards.talents',
            'cards.image',
            'cards.keywords',
            'cards.stats',
            'cards.text',
            'cards.rarity',
            DB::raw("IF(JSON_EXTRACT(cards.keywords, '$[0]') = 'generic', 1, 0) AS build_order")
        ]);

        $filters = [
            new PrintingFilter,
            new SyntaxFilter,
            new IdentifierFilter,
            new BannedCardsFilter($this->legallyAffected(), $deck),
            new VariantsFilter,
            new HeroFilter($this, $deck),
            new ClassFilter,
            new TalentFilter,
            new TypeFilter,
            new CostFilter,
            new PitchFilter,
            new RarityFilter,
            new CommonerFilter($deck),
            new PauperFilter($deck),
            new OrderFilter,
            new UseCollectionFilter($user, $deck),
            new UseSealedPoolFilter($deck)
        ];

        $this->applyFilters($query, $filters, $input);

        return $query;
    }

    public function ad(string $identifier, string $currency): Card
    {
        return $this->newQuery()
            ->join('printings', 'printings.card_id', 'cards.id')
            ->select('cards.id', 'cards.identifier', 'cards.image', 'cards.name')
            ->with(['ad' => function ($query) use ($currency) {
                $query->where('stores.currency', $currency);
            }])
            ->where('printings.sku', $identifier)->first();
    }

    public function findBySku(string $identifier)
    {
        $query = $this->newQuery()
            ->with('artist', 'currentPrice')
            ->join('printings', 'printings.card_id', 'cards.id')
            ->where('sku', 'like', $identifier . '%')
            ->select([
                'cards.id',
                'cards.price_id',
                'cards.identifier',
                'cards.image',
                'cards.name',
                'cards.legality',
                'cards.rarity',
                'cards.keywords',
                'cards.stats',
                'cards.text',
                'cards.flavour',
                'cards.comments',
                'cards.price',
                'cards.last_price',
            ]);

        return $query->firstOrFail();
    }

    public function forPacks(Set $set): Collection
    {
        return $this->newQuery()
            ->join('printings', 'printings.card_id', 'cards.id')
            ->where('printings.sku', 'like', $set->raw().'%')
            ->whereRaw("JSON_EXTRACT(cards.legality, '\$.blitz') IS NULL")
            ->select([
                'cards.id',
                'cards.identifier',
                'printings.sku',
                'cards.classes',
                'cards.image',
                'cards.name',
                'cards.rarity',
                'cards.keywords',
                'cards.talents',
            ])
            ->groupBy('cards.id')
            ->get();
    }

    public function findHero($hero, string $heroAge)
    {

        $query = $this->newQuery()
            ->select('cards.id', DB::raw("MATCH(search_text) AGAINST('$hero') AS rating"))
            ->whereType('hero')
            ->whereRaw("MATCH(search_text) AGAINST(?)", [$hero])
            ->orderBy('rating', 'DESC');

        if ($heroAge === 'young') {
            $query->whereJsonContains('sub_types', $heroAge);
        }

        return $query->first();
    }

    public function getIdByIdentifierOrText(string $identifier)
    {
        $card = $this->newQuery()
            ->select('cards.id')
            ->whereIdentifier($identifier)
            ->first();

        if ($card) {
            return $card;
        }

        return $this->newQuery()
                ->select('cards.id', DB::raw("MATCH(search_text) AGAINST('$identifier') AS rating"))
                ->whereRaw("MATCH(search_text) AGAINST(?)", [$identifier])
                ->orderBy('rating', 'DESC')
                ->first();
    }

    private function legallyAffected()
    {
        return $this->newQuery()
            ->whereNotNull('legality')
            ->select('id', 'legality')
            ->get();
    }

    public function findAny(string $text)
    {
        return $this->newQuery()->whereFullText('search_text', $text)->limit(10)->get();
    }

    public function getAllIdsByIdentifiers(array $identifiers): array
    {
        return $this->newQuery()
            ->select('cards.id', 'cards.identifier')
            ->join('printings', function($join) use ($identifiers) {
                $join->on('printings.card_id', 'printings.id');
                $join->whereIn('printings.sku', $identifiers);
            })
            ->get()
            ->keyBy('id')
            ->pluck('identifier')
            ->toArray();
    }

    public function getAllIdsByCardNumbers(array $numbers): array
    {
        return $this->newQuery()
            ->select('cards.id', 'printings.number')
            ->join('printings', function($join) {
                $join->on('printings.card_id', 'cards.id');
            })
            ->whereIn('printings.number', $numbers)
            ->get()
            ->keyBy('id')
            ->mapWithKeys(fn($result) => [$result['number'] => $result['id']])
            ->toArray();
    }

    public function getFirstByNumber(string $number)
    {
        return $this->newQuery()
            ->select('cards.id')
            ->join('printings', 'printings.card_id', 'cards.id')
            ->where('printings.number', $number)
            ->first();
    }

    public function fabled(): Collection
    {
        return $this->newQuery()
            ->join('printings', 'printings.card_id', 'cards.id')
            ->where('printings.rarity', 'F')
            ->orderBy('printings.id')
            ->groupBy('printings.card_id')
            ->get();
    }

    public function aggregatePrices(): Collection
    {
        return $this->newQuery()
            ->select('cards.id', 'cards.name')
            ->with('cardPrices')
            ->join('card_prices', 'card_prices.card_id', 'cards.id')
            ->groupBy('cards.id')
            ->get();
    }

    public function getByPrintingSku(string $sku): ?Card
    {
        return $this->newQuery()
            ->join('printings', 'printings.card_id', 'cards.id')
            ->where('printings.sku', 'LIKE', '%'.$sku.'%')
            ->first();
    }


}
