<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\Packs;
use FabDB\Domain\Cards\Set;
use FabDB\Domain\Decks\DeckRepository;
use FabDB\Http\Resources\CardResource;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function list(Request $request, CardRepository $cards)
    {
        $cards = $cards->search($request->user(), $request->all())
            ->paginate($request->get('per_page', 12))
            ->withPath('/'.$request->path())
            ->appends($request->except('page'));

        return CardResource::collection($cards);
    }

    public function heroes(CardRepository $cards)
    {
        return $cards->uniqueHeroes();
    }

    public function fabled(CardRepository $cards)
    {
        return collect([
            $cards->findByIdentifier('WTR000'),
            $cards->findByIdentifier('ARC000'),
            $cards->findByIdentifier('CRU000'),
        ]);
    }

    public function build(Request $request, DeckRepository $decks, CardRepository $cards)
    {
        $deck = $decks->bySlug($request->get('deck'));

        return $cards->buildSearch($request->user(), $deck, $request->all())
            ->paginate($request->get('per_page', 24));
    }

    public function view(Request $request, CardRepository $cards)
    {
        return new CardResource($cards->view($request->card->identifier, ['listings', 'listings.store']));
    }

    public function ad(Request $request, CardRepository $cards)
    {
        return new CardResource($cards->ad($request->identifier, object_get($request->user(), 'currency', 'USD')));
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
