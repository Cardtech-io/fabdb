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
            ->simplePaginate($request->get('per_page'))
            ->withPath('/'.$request->path())
            ->appends($request->except('page'));

        return CardResource::collection($cards);
    }

    public function view(Request $request, CardRepository $cards)
    {
        return parent::view($request, $cards);
    }
}
