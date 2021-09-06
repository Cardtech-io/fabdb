<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\Repository;

interface ArtistRepository extends Repository
{
    public function findBySlug(string $artist);
}
