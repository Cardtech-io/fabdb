<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
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
        $query = $this->newQuery()->whereSlug($slug);

        if ($includeCards) {
            $query->with('cards');
        }

        return $query->firstOrFail();
    }

    public function addCardToDeck(int $deckId, int $cardId)
    {
        $deck = $this->find($deckId);
        $existing = $deck->card($cardId);

        if ($existing) {
            DB::update('UPDATE deck_cards SET total = total + 1 WHERE deck_id = ? AND card_id = ?', [$deckId, $cardId]);
        } else {
            DB::insert('INSERT INTO deck_cards SET deck_id = ?, card_id = ?, total = 1', [$deckId, $cardId]);
        }

        $deck->touch();
    }

    public function removeCardFromDeck(int $deckId, int $cardId)
    {
        $deck = $this->find($deckId);
        $existing = $deck->card($cardId);

        if (!$existing) return;

        if ($existing->pivot && $existing->pivot->total > 1) {
            DB::update('UPDATE deck_cards SET total = total - 1 WHERE id = ?', [$existing->pivot->id]);

            $sideboard = $deck->sideboardCard($cardId);

            if ($sideboard && $sideboard->total < $existing->total) {
                DB::update('UPDATE sideboard SET total = total - 1 WHERE id = ?', [$sideboard->pivot->id]);
            }
        } else {
            DB::delete('DELETE FROM deck_cards WHERE id = ?', [$existing->pivot->id]);
        }

        $deck->touch();
    }

    public function addCardToSideboard(int $deckId, int $cardId)
    {
        $deck = $this->find($deckId);
        $card = $deck->card($cardId);
        $existing = $deck->sideboardCard($cardId);

        if ($existing) {
            DB::update('UPDATE sideboard SET total = total + 1 WHERE id = ?', [$existing->pivot->id]);
        } else {
            DB::insert('INSERT INTO sideboard SET deck_card_id = ?, deck_id = ?, card_id = ?, total = 1', [$card->pivot->id, $deckId, $cardId]);
        }

        $deck->touch();
    }

    public function removeCardFromSideboard(int $deckId, int $cardId)
    {
        $deck = $this->find($deckId);
        $card = $deck->card($cardId);

        $existing = $deck->sideboardCard($cardId);

        if (!$existing) return;

        if ($existing->total > 1) {
            DB::update('UPDATE sideboard SET total = total - 1 WHERE id = ?', [$existing->pivot->id]);
        } else {
            DB::delete('DELETE FROM sideboard WHERE id = ?', [$existing->pivot->id]);
        }

        $deck->touch();
    }
}
