<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Users\User;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class EloquentCardRepository extends EloquentRepository implements CardRepository
{
    /**
     * @var CardViewer
     */
    private $cardViewer;

    public function __construct(CardViewer $cardViewer)
    {
        $this->cardViewer = $cardViewer;
    }

    protected function model(): Model
    {
        return new Card;
    }

    /**
     * Searches for a range of cards, that match the provided parameters.
     *
     * @param string $useCase
     * @param array $keywords
     * @param $class
     * @param $type
     * @param $set string
     * @param string $view
     * @param User $user
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function search(string $useCase, array $keywords, $class, $type, $set, $view = 'all', User $user = null)
    {
        $query = $this->newQuery();
        $query->select([
            'cards.identifier',
            'cards.name',
            'cards.keywords',
            'cards.stats',
        ]);

        if ($set && $set != 'all') {
            $query->where('identifier', 'LIKE', $set . '%');
        }

        // The following condition and clause determines whether the user is looking for an individual card or not
        if (count($keywords) && $keywords[0] != 'missing') {
            $keywords = implode(' ', $keywords);
            
            $query->whereRaw("MATCH(search_text) AGAINST ('$keywords' IN NATURAL LANGUAGE MODE)");
        } elseif (count($keywords) == 1 && $keywords[0] === 'missing') {
            // do nothing, check below.
        } else {
            foreach ($keywords as $param) {
                $param = strtolower($param);

                $query->where(function($query) use ($param){
                    $query->orWhere('name', 'LIKE', "%{$param}%");
                    $query->orWhereRaw("JSON_SEARCH(keywords, 'one', '{$param}') IS NOT NULL");
                });
            }
        }

        if ($useCase == 'build') {
            $query->whereNotIn('identifier', config('cards.banned'));
        }

        if ($class) {
            $query->where(\DB::raw("JSON_EXTRACT(keywords, '$[0]')"), $class);
        }

        if ($type) {
            $type = explode(' ', $type);

            for ($i = 0; $i < count($type); $i++) {
                $index = $i + 1;
                $query->where(\DB::raw("JSON_EXTRACT(keywords, '$[$index]')"), $type[$i]);
            }
        }

        if ($user->id) {
            switch ($useCase) {
                case 'collection':
                    // if we're viewing the collection then it's a straight join, otherwise it's a left join
                    // so that we can do a specific clause against missing cards from the collection.
                    $join = in_array($view, ['all', 'need']) ? 'leftJoin' : 'join';
                    break;
                default:
                    $join = 'leftJoin';
            }

            $query->$join('owned_cards', function($join) use ($user) {
                $join->on('owned_cards.card_id', '=', 'cards.id');
                $join->where('owned_cards.user_id', $user->id);
                $join->where(function($clause) {
                    $clause->where('owned_cards.standard', '>', 0);
                    $clause->orWhere('owned_cards.foil', '>', 0);
                    $clause->orWhere('owned_cards.promo', '>', 0);
                });
            });

            // If their main search parameter is to find needed cards, then only show cards where there is no record of the owned card
            if ($view == 'need') {
                $query->where(function($clause) use ($user) {
                    $clause->whereNull('owned_cards.id');
                    $clause->orWhere('owned_cards.standard', '<', $user->need);
                });
            }

            $query->addSelect('owned_cards.standard', 'owned_cards.foil', 'owned_cards.promo');
        }

        $query->orderBy('cards.identifier');

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
            'cards.name',
            'cards.rarity',
            'cards.keywords',
            'cards.stats',
            'cards.text',
            'cards.flavour',
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

    public function getRandomCommons($class, int $num): Collection
    {
        $operator = $class == 'generic' ? '=' : '<>';

        return $this->newQuery()
            ->select('id', 'identifier', 'name')
            ->whereRarity('C')
            ->whereRaw("REPLACE(JSON_EXTRACT(keywords, '$[0]'), '\"', '') $operator 'generic'")
            ->whereRaw("REPLACE(JSON_EXTRACT(keywords, '$[1]'), '\"', '') NOT IN ('hero', 'equipment')")
            ->orderBy(\DB::raw('RAND()'))
            ->take($num)
            ->get();
    }

    public function getRandomEquipmentCommon(): Card
    {
        return $this->newQuery()
            ->select('id', 'identifier', 'name')
            ->whereRarity('C')
            ->where(\DB::raw("JSON_EXTRACT(keywords, '$[1]')"), 'equipment')
            ->orderBy(\DB::raw('RAND()'))
            ->first();
    }

    public function getRandom(Rarity $rarity, array $exclude = []): Card
    {
        $query = $this->newQuery()
            ->select('id', 'identifier', 'name')
            ->whereRarity($rarity)
            ->orderBy(\DB::raw('RAND()'));

        if ($exclude) {
            $query->whereNotIn('id', $exclude);
        }

        return $query->first();
    }

    public function getRandomFoil(): Card
    {
        return $this->newQuery()
            ->select('id', 'identifier', 'name')
            ->where('rarity', '!=', 'T')
            ->where(\DB::raw("JSON_EXTRACT(keywords, '$[1]')"), '<>', 'hero')
            ->orderBy(\DB::raw('RAND()'))
            ->first();
    }

    public function view(string $identifier): Card
    {
        $card = $this->findByIdentifier($identifier);

        $card->next = $this->nav(function() use ($identifier) {
            return $this->findByIdentifier($this->cardViewer->newIdentifier($identifier, '+'))->identifier;
        });

        $card->prev = $this->nav(function() use ($identifier) {
            return $this->findByIdentifier($this->cardViewer->newIdentifier($identifier, '-'))->identifier;
        });

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

    private function nav(\Closure $exec)
    {
        try { return $exec(); }
        catch (ModelNotFoundException $e) {}
    }
}
