<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Market\PriceAverage;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class EloquentDeckRepository extends EloquentRepository implements DeckRepository
{
    protected function model(): Model
    {
        return new Deck;
    }

    public function forUser(int $userId): LengthAwarePaginator
    {
        return $this->newQuery()
            ->whereUserId($userId)
            ->orderBy('updated_at', 'desc')
            ->paginate(10);
    }

    public function bySlugWithCards(string $slug, bool $includeCards = false): Model
    {
        $query = $this->newQuery()->select('decks.*');
        $query = $this->slugQuery($query, $slug);

        if ($includeCards) {
            $query->with(['cards' => function($query) {
                $user = auth()->user();

                $query->join('printings', 'printings.card_id', '=', 'cards.id');
                $query->groupBy('cards.id');

                if ($user) {
                    $query->addSelect('cards.*', DB::raw('SUM(owned_cards.total) AS total_owned'));
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

    public function search(array $params)
    {
        $query = $this->newQuery();

        $priceCalc = DB::raw("(
            SELECT
                SUM(deck_cards.total * card_means.mean_{$params['currency']})
                FROM deck_cards
                JOIN card_means ON card_means.card_id = deck_cards.card_id
                WHERE deck_cards.deck_id = decks.id
            ) AS total_price");

        $query->select([
            'decks.id',
            'decks.user_id',
            'decks.name',
            'decks.slug',
            'decks.format',
            $priceCalc,
            DB::raw('(SELECT SUM(deck_cards.total) FROM deck_cards WHERE deck_cards.deck_id = decks.id) - 1 AS total_cards')
        ]);

        $query->withVotes();

        $query->with(['cards' => function($include) {
            $include->whereRaw('JSON_SEARCH(cards.keywords, \'one\', \'hero\') IS NOT NULL');
            $include->orWhereRaw('JSON_SEARCH(cards.keywords, \'one\', \'weapon\') IS NOT NULL');
        }]);

        $query->with('user');

        $query->join('users', 'users.id', 'decks.user_id');
        $query->join(DB::raw('deck_cards dc1'), 'dc1.deck_id', '=', 'decks.id');
        $query->join(DB::raw('cards c1'), function($join) use ($params) {
            $join->on('c1.id', '=', 'dc1.card_id');
            $join->whereRaw("JSON_SEARCH(c1.keywords, 'one', 'hero')");

            if (!empty($params['hero'])) {
                $join->where('c1.name', $params['hero']);
            }
        });

        if (!empty($params['format'])) {
            $query->where('decks.format', $params['format']);
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

        return $query;
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
}
