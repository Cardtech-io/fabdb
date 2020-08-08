<?php
namespace FabDB\Http\Controllers\Api;

use Dingo\Api\Routing\Helpers;
use FabDB\Domain\Cards\CardRepository;
use Illuminate\Http\Request;

class CardController extends \FabDB\Http\Controllers\CardController
{
    public function list(Request $request, CardRepository $cards)
    {
        if (!$request->has('per_page')) {
            $request->merge(['per_page' => 25]);
        }

        $cards = parent::list($request, $cards);

        return $cards;
    }
}
