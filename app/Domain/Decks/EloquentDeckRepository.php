<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Market\PriceAverage;
use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class EloquentDeckRepository extends EloquentRepository implements DeckRepository
{
    protected function model(): Model
    {
        return new Deck;
    }

    public function forUser(int $userId): Collection
    {
        return $this->newQuery()
            ->whereUserId($userId)
            ->orderBy('updated_at', 'desc')
            ->get();
    }

    public function bySlugWithCards(string $slug, bool $includeCards = false): Model
    {
        $query = $this->newQuery()->select('decks.*');
        $query = $this->slugQuery($query, $slug);

        if ($includeCards) {
            $query->with('cards');
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
                DB::insert('INSERT INTO deck_cards SET deck_id = ?, card_id = ?, total = 1', [$deckId, $cardId]);
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
        $priceDate = PriceAverage::max('created_at');

        $query->select([
            'decks.id',
            'decks.user_id',
            'decks.name',
            'decks.slug',
            DB::raw('SUM(dc2.total * price_averages.mean) AS total_price'),
            DB::raw('(SELECT SUM(deck_cards.total) FROM deck_cards WHERE deck_cards.deck_id = decks.id) - 1 AS total_cards')
        ]);

        $query->withVotes();

        $query->with(['cards' => function($include) {
            $include->whereRaw('JSON_SEARCH(cards.keywords, \'one\', \'hero\') IS NOT NULL');
            $include->orWhereRaw('JSON_SEARCH(cards.keywords, \'one\', \'weapon\') IS NOT NULL');
        }]);

        $query->with('user');

        $query->join(DB::raw('deck_cards dc1'), 'dc1.deck_id', '=', 'decks.id');
        $query->join(DB::raw('cards c1'), function($join) use ($params) {
            $join->on('c1.id', '=', 'dc1.card_id');
            $join->whereRaw("JSON_SEARCH(c1.keywords, 'one', 'hero')");

            if (!empty($params['hero'])) {
                $join->where('c1.identifier', $params['hero']);
            }
        });

        $query->join(DB::raw('deck_cards dc2'), 'dc2.deck_id', '=', 'decks.id');
        $query->join(DB::raw('cards c2'), 'c2.id', 'dc2.card_id');

        $query->leftJoin('price_averages', function($join) use ($params, $priceDate) {
            $join->on('price_averages.card_id', '=', 'dc2.card_id');
            $join->where(function($query) {
                $query->where(function($query) {
                    $query->whereIn('c2.rarity', ['L', 'F']);
                    $query->where('price_averages.variant', 'cold');
                });
                $query->orWhere(function($query) {
                    $query->whereNotIn('c2.rarity', ['L', 'F']);
                    $query->where('price_averages.variant', 'regular');
                });
            });
            $join->where('price_averages.currency', $params['currency']);
            $join->where('price_averages.created_at', $priceDate);
        });

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
        $query->groupBy('decks.id');

        return $query;
    }
}
