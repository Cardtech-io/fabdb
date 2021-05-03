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
    /**
     * @var CardRepository
     */
    private CardRepository $cards;

    public function __construct(CardRepository $cards)
    {
        $this->cards = $cards;
    }

    public function list(Request $request)
    {
        $cards = $this->cards->search($request->user(), $request->all())
            ->paginate($request->get('per_page', 30))
            ->withPath('/'.$request->path())
            ->appends($request->except('page'));

        return CardResource::collection($cards);
    }

    public function heroes(CardRepository $cards)
    {
        return CardResource::collection($this->cards->uniqueHeroes());
    }

    public function fabled()
    {
        return CardResource::collection(collect([
            $this->cards->findByIdentifier('heart-of-fyendal-blue'),
            $this->cards->findByIdentifier('eye-of-ophidia-blue'),
            $this->cards->findByIdentifier('arknight-shard-blue'),
        ]));
    }

    public function build(Request $request, DeckRepository $decks)
    {
        $deck = $decks->bySlug($request->get('deck'));

        return CardResource::collection($this->cards->buildSearch($request->user(), $deck, $request->all())
            ->paginate($request->get('per_page', 24)));
    }

    public function view(Request $request)
    {
        return new CardResource($this->cards->view($request->identifier, ['listings', 'listings.store', 'printings']));
    }

    public function ad(Request $request)
    {
        return new CardResource($this->cards->ad($request->identifier, object_get($request->user(), 'currency', 'USD')));
    }

    public function generatePack(Request $request, Packs $packs)
    {
        return CardResource::collection($packs->generate(new Set($request->get('set'))));
    }

    public function prices(Request $request)
    {
        return $this->cards->prices($request->all())
            ->paginate($request->get('per_page', 50))
            ->appends($request->except('page'));
    }

    public function forPacks(Request $request)
    {
        return $this->cards->forPacks(new Set($request->get('set')));
    }
}
