<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Collection\AddCardToCollection;
use FabDB\Domain\Collection\RemoveCardFromCollection;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function addCard(Request $request, CardRepository $cards)
    {
        $card = $cards->find($request->get('identifier'), $request->user()->id);

        $this->dispatchNow(new AddCardToCollection($card->id, $request->user()->id));
    }

    public function removeCard(Request $request, Card $card)
    {
        $this->dispatchNow(new RemoveCardFromCollection($card->id, $request->user()->id));
    }
}