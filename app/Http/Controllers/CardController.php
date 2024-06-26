<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\Boosters\Packs;
use FabDB\Domain\Cards\PrintingRepository;
use FabDB\Domain\Cards\Search\Params\Param;
use FabDB\Domain\Cards\Search\Params\Params;
use FabDB\Domain\Cards\Set;
use FabDB\Domain\Cards\SuggestCorrection;
use FabDB\Domain\Decks\DeckRepository;
use FabDB\Http\Resources\CardResource;
use Illuminate\Http\Request;

class CardController extends Controller
{
    /**
     * @var CardRepository
     */
    protected $cards;

    public function __construct(CardRepository $cards)
    {
        $this->cards = $cards;
    }

    public function list(Request $request)
    {
        $perPage = $request->get('per_page', 30);

        if ($perPage > 30) $perPage = 30;

        $cards = $this->cards->search($request->user(), $request->all())
            ->paginate($perPage)
            ->withPath('/'.$request->path())
            ->appends($request->except('page'));

        return CardResource::collection($cards);
    }

    public function heroes()
    {
        return CardResource::collection($this->cards->uniqueHeroes());
    }

    public function fabled()
    {
        return CardResource::collection($this->cards->fabled());
    }

    public function build(Request $request, DeckRepository $decks)
    {
        $deck = $decks->bySlug($request->get('deck'));

        return CardResource::collection($this->cards->buildSearch($request->user(), $deck, $request->all())
            ->paginate($request->get('per_page', 24)));
    }

    public function view(Request $request)
    {
        return new CardResource($this->cards->view($request->identifier, ['listings', 'listings.store', 'printings', 'printings.backfacePrinting']));
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
        return CardResource::collection($this->cards->forPacks(new Set($request->get('set'))));
    }

    public function suggestCorrection(Request $request, PrintingRepository $printings)
    {
        $printing = $printings->findBySku($request->get('printing'));

        $this->dispatchNow(new SuggestCorrection(
            $request->user()->id,
            $printing->id,
            $request->get('name'),
            $request->get('text'),
            $request->get('comment', ''),
        ));
    }

    public function syntax(Params $params)
    {
        $params = $params->sort(function(Param $param1, Param $param2) {
            if ($param1->title() == $param2->title()) {
                return 0;
            }
            return ($param1->title() < $param2->title()) ? -1 : 1;
        });

        return view('components.search.syntax', compact('params'));
    }
}
