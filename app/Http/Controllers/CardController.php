<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\Packs;
use FabDB\Domain\Cards\Set;
use FabDB\Http\Resources\CardResource;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function list(Request $request, CardRepository $cards)
    {
        return $cards->search($request->user(), $request->all())
            ->paginate($request->get('per_page', 12))
            ->withPath('/'.$request->path())
            ->appends($request->except('page'));
    }

    public function fabled(CardRepository $cards)
    {
        return collect([
            $cards->findByIdentifier('WTR000'),
            $cards->findByIdentifier('ARC000'),
        ]);
    }

    public function view(Request $request, CardRepository $cards)
    {
        return new CardResource($cards->view($request->card->identifier));
    }

    public function generatePack(Request $request, Packs $packs)
    {
        return CardResource::collection($packs->generate(new Set($request->get('set'))));
    }

    public function prices(Request $request, CardRepository $cards)
    {
        return $cards->prices($request->all())
            ->paginate($request->get('per_page', 50))
            ->appends($request->except('page'));
    }
}
