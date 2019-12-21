<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Decks\Deck;
use FabDB\Library\PDF;

class ExportController extends Controller
{
    public function pdf(Deck $deck)
    {
        $url = route('export.html', ['deck' => $deck]);
        $pdf = PDF::generate($url);

        return response($pdf)->header('Content-type', 'application/pdf');
    }

    public function html(Deck $deck)
    {
        return view('export/pdf', compact('deck'));
    }
}
