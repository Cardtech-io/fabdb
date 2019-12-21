<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Decks\Deck;
use FabDB\Library\PDF;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class ExportController extends Controller
{
    public function pdf(Deck $deck)
    {
        $url = route('export.html', ['deck' => $deck]);
        $pdf = PDF::generate($url);

        $filename = "tmp/{$deck->slug}.pdf";
        
        Storage::put($filename, $pdf);

        Mail::send('emails.deck-registration', function($message) use ($deck, $filename) {
            $message->to($deck->user->email);
            $message->attach($filename);
        });
    }

    public function html(Deck $deck)
    {
        return view('export/pdf', compact('deck'));
    }
}
