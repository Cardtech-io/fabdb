<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\CardType;
use FabDB\Domain\Collection\AddCardToCollection;
use FabDB\Domain\Collection\RemoveCardFromCollection;
use FabDB\Domain\Collection\UpdateCardInCollection;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function addCard(Request $request, CardRepository $cards)
    {
        $card = $cards->findByIdentifier($request->get('identifier'), $request->user()->id);

        $this->dispatchNow(new AddCardToCollection(
            $card->id,
            $request->user()->id,
            new CardType($request->get('type')),
            $request->get('total', 1)
        ));
    }

    public function updateCard(Request $request, CardRepository $cards)
    {
        $card = $cards->findByIdentifier($request->get('identifier'), $request->user()->id);

        $this->dispatchNow(new UpdateCardInCollection(
            $card->id,
            $request->user()->id,
            new CardType($request->get('type')),
            $request->get('total')
        ));
    }

    public function removeCard(Request $request, Card $card)
    {
        $this->dispatchNow(new RemoveCardFromCollection(
            $card->id,
            $request->user()->id,
            new CardType($request->get('type')),
            $request->get('total', 1)
        ));
    }
}
