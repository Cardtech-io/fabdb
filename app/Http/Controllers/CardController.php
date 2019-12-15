<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function list(Request $request, CardRepository $cards)
    {
        $keywords = collect(explode(' ', $request->get('keywords')))->map(function($keyword) {
            return addslashes($keyword);
        })->filter()->toArray();

        return $cards->search(
            $request->get('view'),
            $keywords,
            $request->get('class'),
            $request->get('type'),
            @$request->user()->id
        )->paginate($request->get('per_page', 12))->appends($request->except('page'));
    }

    public function view(Card $card)
    {
        return $card;
    }
}
