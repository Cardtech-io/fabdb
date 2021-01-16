<?php
namespace FabDB\Domain\Cards;

interface PrintingRepository
{
    public function findBySku(string $sku);
}
