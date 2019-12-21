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

        $fullPath = Storage::path($filename);

        Mail::send('emails.deck-registration', [], function($message) use ($deck, $fullPath) {
            $message->to($deck->user->email);
            $message->subject('PDF for Deck Registration | fabdb.net');
            $message->attach($fullPath);
        });
    }

    public function html(Deck $deck)
    {
        return view('export/pdf', compact('deck'));
    }
}
