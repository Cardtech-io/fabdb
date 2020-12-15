<?php
namespace FabDB\Domain\Cards;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class CardsImport implements WithMultipleSheets
{
    public function sheets(): array
    {
        return [
            'ira_singles' => new CardImport,
            'wtr_alpha_singles' => new CardImport,
            'wtr_hero_singles' => new CardImport,
            'wtr_unlimited_singles' => new CardImport,
            'arc_first_singles' => new CardImport,
            'arc_unlimited_singles' => new CardImport,
            'cru_first_singles' => new CardImport,
            'promo_singles' => new CardImport,
        ];
    }
}
