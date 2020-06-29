<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\Packs;
use FabDB\Domain\Cards\Set;
use FabDB\Domain\Users\User;
use Illuminate\Http\Request;

class CardController extends Controller
{
    public function list(Request $request, CardRepository $cards)
    {
        return $cards->search($request->user(), $request->all())
            ->paginate($request->get('per_page', 12))
            ->appends($request->except('page'));
    }

    public function view(Request $request, CardRepository $cards)
    {
        return $cards->view($request->card->identifier);
    }

    public function generatePack(Request $request, Packs $packs)
    {
        return $packs->generate(new Set($request->get('set')));
    }

    public function prices(Request $request, CardRepository $cards)
    {
        return $cards->prices($request->get('currency'), $request->get('set'))
            ->paginate($request->get('per_page', 50))
            ->appends($request->except('page'));

    }
}
