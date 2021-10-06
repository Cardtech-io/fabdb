<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Users\User;
use FabDB\Library\Repository;

interface PrintingRepository extends Repository
{
    public function findBySku(string $sku);

    public function collection(User $user, array $input);
}
