<?php
namespace FabDB\Http\Controllers\Intranet;

use FabDB\Domain\Cards\Card;
use FabDB\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function tekloSync(Request $request)
    {
        $cards = Card::select('class', 'talent', 'type', 'sub_type', 'name', 'identifier', 'image')
            ->orderBy('identifier')
            ->cursorPaginate(100);

        $cards->each(function(Card $card) {
            $card->makeVisible('attribute');
        });

        return $cards;
    }
}
