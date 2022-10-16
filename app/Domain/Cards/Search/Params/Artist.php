<?php

namespace FabDB\Domain\Cards\Search\Params;

use FabDB\Domain\Cards\ArtistRepository;

class Artist extends Param
{
    public function handles(string $filter): bool
    {
        return in_array($filter, ['artist']);
    }

    public function applyTo($query, string $operator, $value, bool $invert)
    {
        $artist = app(ArtistRepository::class)->searchByName($value);

        if ($artist) {
            $query->where('cards.artist_id', $artist->id);
        }
    }

    public function title(): string
    {
        return 'Artist';
    }
}
