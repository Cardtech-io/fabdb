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
        $keywords = collect(explode(' ', $request->get('keywords')))->map(function($keyword) {
            return addslashes($keyword);
        })->filter()->toArray();

        return $cards->search(
            $request->get('use-case'),
            $keywords,
            $request->get('class'),
            $request->get('type'),
            $request->get('set'),
            $request->get('view', 'all'),
            $request->user() ?? new User
        )->paginate($request->get('per_page', 12))->appends($request->except('page'));
    }

    public function view(Request $request, CardRepository $cards)
    {
        return $cards->view($request->card->identifier);
    }

    public function generatePack(Request $request, Packs $packs)
    {
        return $packs->generate(new Set($request->get('set')));
    }
}
