<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\CardRepository;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function search(Request $request, CardRepository $cards)
    {
        return $cards->search(explode(' ', $request->get('search')));
    }
}
