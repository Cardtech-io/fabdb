<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\ExportDeckToPdf;
use FabDB\Domain\Decks\ExportDeckToTTS;
use FabDB\Domain\Decks\TTSObserver;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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

    /**
     * Provides a tabletop simulator compliant JSON file.
     *
     * @param Request $request
     * @param Deck $deck
     */
    public function tts(Request $request, Deck $deck)
    {
        $this->dispatch(new ExportDeckToTTS(
            $deck->id,
            $observer = new TTSObserver
        ));

        return response()->streamDownload(function() use ($observer) {
            echo $observer->json();
        }, $deck->name.'.json');
    }

    public function html(Request $request, Deck $deck)
    {
        // Params consists of name, gem id and event - constructed via the PDF exporter.
        $params = json_decode(base64_decode($request->get('params')), true);

        $params['deck'] = $deck;

        return view('export/pdf', $params);
    }
}
