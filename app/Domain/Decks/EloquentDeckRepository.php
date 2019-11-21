<?php
namespace FabDB\Domain\Decks;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Support\Collection;

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

    public function bySlug(string $slug): Model
    {
        return $this->newQuery()->whereSlug($slug)->firstOrFail();
    }
}
