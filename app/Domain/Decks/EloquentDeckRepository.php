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
        return $this->newQuery()->whereUserId($userId)->get();
    }

    public function bySlug(string $slug, bool $includeCards = false): Model
    {
        $query = $this->newQuery()->whereSlug($slug);

        if ($includeCards) {
            $query->with('cards');
        }

        return $query->firstOrFail();
    }

    public function addCardToDeck(Deck $deck, Card $card)
    {
        $existing = $deck->card($card->id);

        if ($existing) {
            DB::update('UPDATE deck_cards SET total = total + 1 WHERE id = ?', [$existing->pivot->id]);
        } else {
            DB::insert('INSERT INTO deck_cards SET deck_id = ?, card_id = ?, total = 1', [$deck->id, $card->id]);
        }
    }

    public function removeCardFromDeck(Deck $deck, Card $card)
    {
        $existing = $deck->card($card->id);

        if ($existing->pivot && $existing->pivot->total > 1) {
            DB::update('UPDATE deck_cards SET total = total - 1 WHERE id = ?', [$existing->pivot->id]);
        } else {
            DB::delete('DELETE FROM deck_cards WHERE id = ?', [$existing->pivot->id]);
        }
    }
}
