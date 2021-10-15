<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\CardType;
use FabDB\Domain\Cards\PrintingRepository;
use FabDB\Domain\Collection\AddCardToCollection;
use FabDB\Domain\Collection\CollectionRepository;
use FabDB\Domain\Collection\RemoveCardFromCollection;
use FabDB\Domain\Collection\TogglePrintingList;
use FabDB\Domain\Collection\UpdateCardInCollection;
use FabDB\Domain\Users\UserRepository;
use FabDB\Http\Requests\UserListsRequest;
use FabDB\Http\Resources\CardResource;
use FabDB\Http\Resources\OwnedCardResource;
use FabDB\Http\Resources\PrintingResource;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

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

    public function clarify(Request $request)
    {
        $user = $request->user();
        $user->clarification = $request->get('clarification');
        $user->save();
    }

    public function lists(UserListsRequest $request, CollectionRepository $collection, UserRepository $users)
    {
        $user = $users->bySlug($request->get('user'));

        $cards = $collection->lists($request->get('view'), $user->id)
            ->paginate($request->get('per_page', 12))
            ->withPath('/'.$request->path())
            ->appends($request->except('page'));

        return OwnedCardResource::collection($cards);
    }

    public function search(Request $request, PrintingRepository $printings)
    {
        return PrintingResource::collection(
            $printings->collection($request->user(), $request->all())->paginate($request->get('per_page', 25))
        );
    }
}
