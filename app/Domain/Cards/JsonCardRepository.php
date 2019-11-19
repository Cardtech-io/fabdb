<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Facades\Storage;

final class JsonCardRepository implements CardRepository
{
    public function search(array $params, int $userId)
    {
        $cards = Storage::disk('carddb')->get('wtr.json');

        return json_decode($cards);
    }
}
