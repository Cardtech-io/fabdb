<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Decks\Filters\VotesFilter;
use FabDB\Domain\Decks\Search\CardsFilter;
use FabDB\Domain\Decks\Search\DeckCardCountFilter;
use FabDB\Domain\Decks\Search\PriceCalculationFilter;
use FabDB\Domain\Decks\Search\UserFilter;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class EloquentDeckRepository extends EloquentRepository implements DeckRepository
{
    protected function model(): Model
    {
        return new Deck;
    }

    public function forUser(int $userId, array $params = []): LengthAwarePaginator
    {
        $query = $this->newQuery()
            ->select('decks.id', 'decks.hero_id', 'decks.parent_id', 'decks.slug', 'decks.label', 'decks.user_id', 'decks.name', 'decks.format', 'decks.updated_at')
            ->with(['hero', 'user', 'parent'])
            ->withCardCount()
            ->whereUserId($userId)
            ->orderBy('updated_at', 'desc');

        $query->join(DB::raw('deck_cards dc1'), 'dc1.deck_id', '=', 'decks.id');
        $query->leftJoin(DB::raw('cards c1'), function($join) use ($params) {
            $join->on('c1.id', '=', 'dc1.card_id');
            $join->whereType('hero');
        });

        $query->join('users', 'users.id', 'decks.user_id');

        if (!empty($params['format'])) {
            $query->where('decks.format', $params['format']);
        }

        if (!empty($params['class'])) {
            $query->where('c1.class', $params['class']);
        }

        $query->groupBy('decks.id');

        return $query->paginate(15);
    }

    public function bySlugWithCards(string $slug, bool $includeCards = false): Model
    {
        $query = $this->newQuery()->select('decks.*');
        $query = $this->slugQuery($query, $slug);

        if ($includeCards) {
            $query->with(['cards' => function($query) {
                $query->select('cards.*', DB::raw('sideboard.total AS sideboard_total'));
                $query->leftJoin('sideboard', 'sideboard.deck_card_id', 'deck_cards.id');

                $user = auth()->user();

                $query->groupBy('cards.id');

                if ($user) {
                    $query->addSelect(DB::raw('SUM(owned_cards.total) AS owned_total'));
                    $query->leftJoin('owned_cards', function ($join) use ($user) {
                        $join->on('owned_cards.card_id', 'cards.id');
                        $join->where('owned_cards.user_id', $user->id);
                    });
                }
            }, 'cards.printings', 'cards.rulings', 'sideboard']);
        }

        return $query->firstOrFail();
    }

    public function addCardToDeck(int $deckId, int $cardId)
    {
        DB::transaction(function() use ($deckId, $cardId) {
            $deck = $this->find($deckId);
            $existing = $this->deckCard($deckId, $cardId);

            if ($existing) {
                $existing->total++;
                $existing->save();
            } else {
                DeckCard::add($deckId, $cardId, 1);
            }

            $deck->touch();
        }, 3);
    }

    public function removeCardFromDeck(int $deckId, int $cardId)
    {
        DB::transaction(function() use ($deckId, $cardId) {
            $deck = $this->find($deckId);
            $existing = $this->deckCard($deckId, $cardId);

            if (!$existing) {
                return;
            }

            if ($existing && $existing->total > 1) {
                $existing->total--;
                $existing->save();

                $sideboard = $deck->sideboardCard($cardId);

                if ($sideboard && $sideboard->total < $existing->total) {
                    DB::update('UPDATE sideboard SET total = total - 1 WHERE id = ?', [$sideboard->id]);
                }
            } else {
                $existing->delete();
            }

            $deck->touch();
        }, 3);
    }

    private function deckCard(int $deckId, int $cardId)
    {
        return DeckCard::whereDeckId($deckId)
            ->whereCardId($cardId)
            ->lockForUpdate()
            ->first();
    }

    public function addCardToSideboard(int $deckId, int $cardId)
    {
        DB::transaction(function() use ($deckId, $cardId) {
            $deck = $this->find($deckId);
            $card = $deck->card($cardId);
            $existing = $deck->sideboardCard($cardId);

            if ($existing) {
                DB::update('UPDATE sideboard SET total = total + 1 WHERE id = ?', [$existing->pivot->id]);
            } else {
                DB::insert('INSERT INTO sideboard SET deck_card_id = ?, deck_id = ?, card_id = ?, total = 1', [$card->pivot->id, $deckId, $cardId]);
            }

            $deck->touch();
        }, 3);
    }

    public function removeCardFromSideboard(int $deckId, int $cardId)
    {
        DB::transaction(function() use ($deckId, $cardId) {
            $deck = $this->find($deckId);
            $existing = $deck->sideboardCard($cardId);

            if (!$existing) return;

            if ($existing->total > 1) {
                DB::update('UPDATE sideboard SET total = total - 1 WHERE id = ?', [$existing->pivot->id]);
            } else {
                DB::delete('DELETE FROM sideboard WHERE id = ?', [$existing->pivot->id]);
            }

            $deck->touch();
        }, 3);
    }

    /**
     * Used for executing two queries - one for a paginator, one without.
     *
     * @param array $params
     * @param bool $forPaginator
     * @return \Illuminate\Database\Eloquent\Builder
     */
    private function searchPart(array $params, bool $forPaginator)
    {
        $query = $this->newQuery();

        $query->select([
            'decks.id',
            'decks.user_id',
            'decks.name',
            'decks.notes',
            'decks.label',
            'decks.slug',
            'decks.format'
        ]);

        // When querying for the paginator, we don't want to overload the query as it queries the entire database
        if (!$forPaginator) {
            $filters = [
                new PriceCalculationFilter,
                new DeckCardCountFilter,
                new VotesFilter,
                new CardsFilter,
                new UserFilter,
            ];

            $this->applyFilters($query, $filters, $params);
        }

        $query->join(DB::raw('deck_cards dc1'), 'dc1.deck_id', '=', 'decks.id');
        $query->join(DB::raw('cards c1'), function($join) use ($params) {
            $join->on('c1.id', '=', 'dc1.card_id');
            $join->whereType('hero');

            if (!empty($params['hero'])) {
                $join->where('c1.name', $params['hero']);
            }
        });

        if (!empty($params['card'])) {
            $query->join(DB::raw('deck_cards dc2'), 'dc2.deck_id', '=', 'decks.id');
            $query->join(DB::raw('cards c2'), function ($join) use ($params) {
                $join->on('c2.id', '=', 'dc2.card_id');
                $join->where('c2.identifier', $params['card']);
            });
        }

        $query->join('users', 'users.id', 'decks.user_id');

        if (!empty($params['format'])) {
            $query->where('decks.format', $params['format']);
        }

        if (!empty($params['label'])) {
            $query->where('decks.label', $params['label']);
        }

        if (!empty($params['user'])) {
            $query->where('users.slug', $params['user']);
        }

        if (!empty($params['order'])) {
            switch ($params['order']) {
                case 'newest':
                    $query->orderBy('decks.id', 'desc');
                    break;
                case 'popular':
                    $query->orderBy('total_votes', 'desc');
                    $query->orderBy('decks.id', 'desc');
                    break;
            }
        }

        $query->where('decks.visibility', 'public');

        if (!$forPaginator) {
            $perPage = Arr::get($params, 'per_page', 24);

            $query->offset((Arr::get($params, 'page', 1) - 1) * $perPage);
            $query->limit($perPage);
        }

        return $query;
    }

    public function search(array $params)
    {
        $items = $this->searchPart($params, false)->get();
        $total = $this->searchPart($params, true)->count();

        $perPage = Arr::get($params, 'per_page', 24);
        $page = Arr::get($params, 'page', 1);

        return (new \Illuminate\Pagination\LengthAwarePaginator($items, $total, $perPage, $page))
            ->appends(Arr::except($params, ['page']));
    }

    public function latest(array $params)
    {
        return $this->searchPart($params, false)->get();
    }

    public function setCardTotal(int $deckId, int $cardId, int $total)
    {
        DB::transaction(function() use ($deckId, $cardId, $total) {
            $deckCard = $this->deckCard($deckId, $cardId);

            if ($deckCard) {
                if (!$total) {
                    $deckCard->delete();
                } else {
                    $deckCard->total = $total;
                    $deckCard->save();
                }
            } else {
                DeckCard::add($deckId, $cardId, $total);
            }
        }, 3);
    }

    public function copy(string $deckSlug, int $userId): Deck
    {
        $deck = $this->bySlugWithCards($deckSlug, true);
        $newDeck = $deck->copy($userId);
        $this->save($newDeck);

        $inserts = $deck->cards->map(function($card) use ($newDeck) {
            return ['deck_id' => $newDeck->id, 'card_id' => $card->id, 'total' => $card->pivot->total];
        })->toArray();

        DB::table('deck_cards')->insert($inserts);

        return $newDeck;
    }

    public function starters(): Collection
    {
        // The user ID zero is official, or system decks (usable only by fab db, not editable by any user)
        return $this->newQuery()
            ->select('decks.id', 'decks.slug', 'decks.name', 'decks.format', 'decks.notes')
            ->with('cards')
            ->whereRaw('user_id = 0')
            ->get();
    }

    public function featured(int $howMany): ?Deck
    {
        return $this->newQuery()
            ->with(['hero', 'user'])
            ->select('decks.id', 'decks.slug', 'decks.label', 'decks.user_id', 'decks.name', 'decks.format', 'features.title', 'features.excerpt')
            ->withCardCount()
            ->join('features', function($join) {
                $join->on('features.featureable_id', 'decks.id');
                $join->where('features.featureable_type', Deck::class);
            })
            ->orderBy('features.publish_at', 'DESC')
            ->first();
    }
}
