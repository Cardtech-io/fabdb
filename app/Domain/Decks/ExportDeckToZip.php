<?php
namespace FabDB\Domain\Decks;

use FabDB\Library\PDF;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class ExportDeckToZip
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

    public function __construct(int $deckId, $name, $gemId, $event)
    {
        $this->deckId = $deckId;
        $this->name = $name;
        $this->gemId = $gemId;
        $this->event = $event;
    }

    public function handle(DeckRepository $decks)
    {
        $deck = $decks->find($this->deckId);
        $pdf = $this->requestPDF();

        $filename = "tmp/{$deck->slug}.pdf";

        Storage::put($filename, $pdf);

        $fullPath = Storage::path($filename);

        Mail::send('emails.deck-registration', [], function($message) use ($deck, $fullPath) {
            $message->to($deck->user->email);
            $message->subject('PDF for Deck Registration | fabdb.net');
            $message->attach($fullPath);
        });
    }
    
    /**
     * @return string
     */
    private function requestPDF(): string
    {
        $params = [
            'name' => $this->name,
            'gemId' => $this->gemId,
            'event' => $this->event
        ];

        $html = view('export/pdf', $params)->render();

        return PDF::generate($html);
    }
}
