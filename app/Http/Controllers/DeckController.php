<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\AddCardToDeck;
use FabDB\Domain\Decks\AddCardToSideboard;
use FabDB\Domain\Decks\AddDeck;
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
use FabDB\Http\Requests\SetDeckCardTotalRequest;
use FabDB\Http\Resources\DeckResource;
use Illuminate\Http\Request;
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
        return $this->decks->search(array_merge($request->all(), ['currency' => object_get($request->user(), 'currency', 'USD')]))
            ->paginate($request->get('per_page', 12))
            ->appends($request->except('page'));
    }

    public function addDeck(Request $request)
    {
        $this->dispatchNow($command = new AddDeck($request->user()->id, $request->get('name')));

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
        $this->dispatchNow(new CopyDeck($request->get('deck'), $request->user()->id));
    }

    public function view(Deck $deck)
    {
        $deck->load('cards', 'cards.rulings');
        $deck->load('sideboard');

        return new DeckResource($deck);
    }

    public function saveSettings(SaveDeckSettingsRequest $request)
    {
        $this->dispatchNow(new SaveDeckSettings(
            $request->deck->id,
            $request->get('name'),
            $request->get('format'),
            (bool) $request->get('useCollection'),
            $request->get('visibility'),
            (int) $request->get('cardBack')
        ));
    }
}
