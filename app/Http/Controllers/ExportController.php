<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Decks\CreateTTSDeckJson;
use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Decks\ExportDeckToPdf;
use FabDB\Domain\Decks\CreateTTSDeckSheet;
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

    public function ttsImages(Deck $deck)
    {
        $this->dispatch(new CreateTTSDeckSheet(
            $deck->id
        ));
    }

    /**
     * Provides a tabletop simulator compliant JSON file.
     *
     * @param Request $request
     * @param Deck $deck
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function ttsJson(Request $request, Deck $deck)
    {
        $this->dispatch(new CreateTTSDeckJson(
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
