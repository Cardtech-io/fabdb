<?php
namespace FabDB\Domain\Cards;

use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class CardImport implements ToModel, WithHeadingRow
{
    public function model(array $row)
    {
        dd($row);
    }
}
