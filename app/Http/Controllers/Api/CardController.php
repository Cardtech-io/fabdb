<?php
namespace FabDB\Http\Controllers\Api;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Http\Resources\CardResource;
use Illuminate\Http\Request;

class CardController extends \FabDB\Http\Controllers\CardController
{
    public function list(Request $request, CardRepository $cards)
    {
        if (!$request->has('per_page')) {
            $request->merge(['per_page' => 25]);
        }

        $cards = $cards->search($request->user(), $request->all())
            ->paginate($request->get('per_page'))
            ->withPath('/'.$request->path())
            ->appends($request->except('page'));

        return CardResource::collection($cards);
    }

    public function first(Request $request, CardRepository $cards)
    {
        return new CardResource($cards->searchFirst($request->all()));
    }

    public function view(Request $request, CardRepository $cards)
    {
        return new CardResource($cards->view($request->cardIdentifier));
    }
}
