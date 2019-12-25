<?php
namespace FabDB\Domain\Decks;

use FabDB\Library\PDF;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class ExportDeckToPdf
{
    /**
     * @var int
     */
    private $deckId;
    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $gemId;

    /**
     * @var string
     */
    private $event;

    public function __construct(int $deckId, string $name, $gemId, string $event)
    {
        $this->deckId = $deckId;
        $this->name = $name;
        $this->gemId = $gemId;
        $this->event = $event;
    }

    public function handle(DeckRepository $decks)
    {
        $deck = $decks->find($this->deckId);

        $url = route('export.html', ['deck' => $deck, 'name' => $this->name, 'gemId' => $this->gemId, 'event' => $this->event]);
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
}
