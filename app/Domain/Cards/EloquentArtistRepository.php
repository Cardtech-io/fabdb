<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentArtistRepository extends EloquentRepository implements ArtistRepository
{
    public function findBySlug(string $artist)
    {
        return $this->newQuery()
            ->with(['cards', 'cards.printings'])
            ->whereSlug($artist)
            ->first();
    }

    protected function model(): Model
    {
        return new Artist;
    }

    public function searchByName(string $searchTerm): ?Artist
    {
        return $this->newQuery()
            ->where('name', 'LIKE', "%$searchTerm%")
            ->first();
    }
}
