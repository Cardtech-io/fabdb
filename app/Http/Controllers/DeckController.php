<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\AddCardToDeck;
use FabDB\Domain\Decks\AddDeck;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\DeckRepository;
use FabDB\Domain\Decks\RemoveCardFromDeck;
use FabDB\Domain\Decks\RemoveDeck;
use FabDB\Http\Requests\AddCardToDeckRequest;
use FabDB\Http\Requests\RemoveCardFromDeckRequest;
use FabDB\Http\Requests\RemoveDeckRequest;
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

    public function removeCard(RemoveCardFromDeckRequest $request, Deck $deck, Card $card)
    {
        $this->dispatchNow(new RemoveCardFromDeck($deck->id, $card->id));
    }

    public function removeDeck(RemoveDeckRequest $request)
    {
        $this->dispatchNow(new RemoveDeck($request->deck));
    }

    public function mine()
    {
        return $this->decks->forUser(Auth::user()->id);
    }

    public function view(Deck $deck)
    {
        return $deck;
    }
}
