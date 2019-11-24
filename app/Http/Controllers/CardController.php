<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function list(Request $request, CardRepository $cards)
    {
        $searchParams = array_map(function($param) {
            return addslashes($param);
        }, explode(' ', $request->get('search')));

        return $cards->search(
            $request->get('view'),
            $searchParams,
            @$request->user()->id
        )->paginate($request->get('per_page', 12))->appends($request->except('page'));
    }

    public function view(Card $card)
    {
        return $card;
    }
}
