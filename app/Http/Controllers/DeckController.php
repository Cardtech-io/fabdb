<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\AddCardToDeck;
use FabDB\Domain\Decks\AddCardToSideboard;
use FabDB\Domain\Decks\AddDeck;
use FabDB\Domain\Decks\CopyDeckObserver;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\DeckRepository;
use FabDB\Domain\Decks\CopyDeck;
use FabDB\Domain\Decks\RemoveCardFromDeck;
use FabDB\Domain\Decks\RemoveCardFromSideboard;
use FabDB\Domain\Decks\RemoveDeck;
use FabDB\Domain\Decks\SaveDeckSettings;
use FabDB\Domain\Decks\SetDeckCardTotal;
use FabDB\Http\Requests\AddCardToDeckRequest;
use FabDB\Http\Requests\AddCardToSideboardRequest;
use FabDB\Http\Requests\RemoveCardFromDeckRequest;
use FabDB\Http\Requests\RemoveDeckRequest;
use FabDB\Http\Requests\SaveDeckSettingsRequest;
use FabDB\Http\Resources\DeckResource;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;

class DeckController extends Controller
{
    /**
     * @var DeckRepository
     */
    private $decks;

    public function __construct(DeckRepository $decks)
    {
        $this->decks = $decks;
    }

    public function search(Request $request)
    {
        return $this->decks->search(
            array_merge($request->all(), ['currency' => object_get($request->user(), 'currency', 'USD')])
        );
    }

    public function starters()
    {
        return DeckResource::collection($this->decks->starters());
    }

    public function latest(Request $request)
    {
        $params = array_merge($request->all(), [
            'per_page' => 10,
            'order' => 'newest'
        ]);

        return $this->decks->search($params);
    }

    public function addDeck(Request $request)
    {
        $this->dispatchNow($command = new AddDeck($request->user()->id, $request->get('name'), $request->get('practise')));

        return $command->deck();
    }

    public function addCard(AddCardToDeckRequest $request, Deck $deck, CardRepository $cards)
    {
        $card = $cards->findByIdentifier($request->get('card'));

        $this->dispatchNow(new AddCardToDeck($deck->id, $card->id));
    }

    public function setCardTotal(AddCardToDeckRequest $request, Deck $deck, Card $card)
    {
        $this->dispatchNow(new SetDeckCardTotal($deck->id, $card->id, $request->get('total')));
    }

    public function addToSideboard(AddCardToSideboardRequest $request, Deck $deck, CardRepository $cards)
    {
        $card = $cards->findByIdentifier($request->get('card'));

        $this->dispatchNow(new AddCardToSideboard($deck->id, $card->id));
    }

    public function removeFromSideboard(Request $request, Deck $deck, Card $card)
    {
        $this->dispatchNow(new RemoveCardFromSideboard($deck->id, $card->id));
    }

    public function removeCard(RemoveCardFromDeckRequest $request, Deck $deck, Card $card)
    {
        $this->dispatchNow(new RemoveCardFromDeck($deck->id, $card->id));
    }

    public function removeDeck(RemoveDeckRequest $request)
    {
        $this->dispatchNow(new RemoveDeck($request->deck->slug));
    }

    public function mine()
    {
        return $this->decks->forUser(Auth::user()->id);
    }

    public function copy(Request $request)
    {
        $observer = new CopyDeckObserver;

        $this->dispatchNow(new CopyDeck($request->get('deck'), $request->user()->id, $observer));

        return ['deck' => $observer->copied()];
    }

    public function view(Deck $deck)
    {
        return new DeckResource($deck);
    }

    public function saveSettings(SaveDeckSettingsRequest $request)
    {
        $this->dispatchNow(new SaveDeckSettings(
            $request->deck->id,
            $request->get('name', $request->deck->name),
            $request->get('label', $request->deck->label),
            $request->get('notes', $request->deck->notes),
            $request->get('format', $request->deck->format),
            (int) $request->get('limitToCollection', $request->deck->limitToCollection),
            $request->get('visibility', $request->deck->visibility),
            (int) $request->get('cardBack', $request->deck->cardBack)
        ));
    }
}
