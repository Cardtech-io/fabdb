<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\ExportDeckToPdf;
use Illuminate\Http\Request;

class ExportController extends Controller
{
    public function pdf(Request $request, Deck $deck)
    {
        $this->dispatch(new ExportDeckToPdf(
            $deck->id,
            $request->get('name'),
            $request->get('gemId'),
            $request->get('event')
        ));
    }

    public function html(Request $request, Deck $deck)
    {
        // Params consists of name, gem id and event - constructed via the PDF exporter.
        $params = json_decode(base64_decode($request->get('params')));

        $params['deck'] = $deck;

        return view('export/pdf', $params);
    }
}
