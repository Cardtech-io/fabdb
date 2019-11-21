<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Decks\AddDeck;
use FabDB\Domain\Decks\DeckRepository;
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
        return $this->dispatchNow(new AddDeck($request->user()->id, $request->get('name')));
    }

    public function mine()
    {
        return $this->decks->forUser(Auth::user()->id);
    }

    public function view($deck)
    {
        return $this->decks->bySlug($deck);
    }
}
