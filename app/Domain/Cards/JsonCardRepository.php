<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Facades\Storage;

final class JsonCardRepository implements CardRepository
{
    public function search(array $params)
    {
        $cards = Storage::disk('carddb')->get('wtr.json');

        return json_decode($cards);
    }
}
