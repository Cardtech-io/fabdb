<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\CardType;
use FabDB\Domain\Cards\PrintingRepository;
use FabDB\Domain\Collection\AddCardToCollection;
use FabDB\Domain\Collection\RemoveCardFromCollection;
use FabDB\Domain\Collection\TogglePrintingList;
use FabDB\Domain\Collection\UpdateCardInCollection;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function addCard(Request $request, PrintingRepository $printings)
    {
        $printing = $printings->findBySku($request->get('sku'));

        $this->dispatchNow(new AddCardToCollection(
            $printing->cardId,
            $printing->id,
            $request->user()->id,
            $request->get('total', 1)
        ));
    }

    public function updateCard(Request $request, PrintingRepository $printings)
    {
        $printing = $printings->findBySku($request->get('sku'));

        $this->dispatchNow(new UpdateCardInCollection(
            $printing->cardId,
            $printing->id,
            $request->user()->id,
            (int) $request->get('total')
        ));
    }

    public function removeCard(Request $request)
    {
        $this->dispatchNow(new RemoveCardFromCollection(
            $request->printing->id,
            $request->user()->id,
            $request->get('total', 1)
        ));
    }

    public function toggleList(Request $request)
    {
        $this->dispatchNow(new TogglePrintingList(
            $request->printing->cardId,
            $request->printing->id,
            $request->user()->id,
            $request->type
        ));
    }
}
