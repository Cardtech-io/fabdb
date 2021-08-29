<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Users\User;

interface PrintingRepository
{
    public function findBySku(string $sku);

    public function collection(User $user, array $input);
}
