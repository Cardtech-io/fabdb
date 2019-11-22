<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Facades\Storage;

final class JsonCardRepository implements CardRepository
{
    public function search(string $view, array $params, int $userId = null)
    {
        $cards = Storage::disk('carddb')->get('wtr.json');

        return json_decode($cards);
    }
}
