<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Facades\Storage;

final class JsonCardRepository implements CardRepository
{
    public function search(string $useCase, array $keywords, $class, $type, $view, User $user = null)
    {
        $cards = Storage::disk('carddb')->get('wtr.json');

        return json_decode($cards);
    }
}
