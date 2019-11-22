<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function list(Request $request, CardRepository $cards)
    {
        return $cards->search(
            $request->get('view'),
            explode(' ', $request->get('search')),
            @$request->user()->id
        )->appends($request->except('page'));
    }

    public function view(Card $card)
    {
        return $card;
    }
}
