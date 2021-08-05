<?php
namespace FabDB\Domain\Practise;

use FabDB\Library\Repository;

interface PractiseRepository extends Repository
{
    public function view(string $slug);

    public function forUser(int $userId);
}
