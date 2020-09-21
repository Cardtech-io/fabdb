<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Library\PDF;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

class ExportDeckToPDF
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
        $pdf = $this->requestPDF($deck);
        $pdfFile = "tmp/{$deck->slug}.pdf";

        Storage::put($pdfFile, $pdf);

        $pdfPath = Storage::path($pdfFile);

        Mail::send('emails.deck-registration', [], function($message) use ($deck, $pdfPath) {
            $message->to($deck->user->email);
            $message->subject('PDF export for Deck Registration | fabdb.net');
            $message->attach($pdfPath, ['as' => 'deck.pdf']);
        });
    }

    private function requestPDF(Deck $deck): string
    {
        $params = [
            'deck' => $deck,
            'name' => $this->name,
            'gemId' => $this->gemId,
            'event' => $this->event
        ];

        $html = view('export/pdf', $params)->render();

        return PDF::generate($html);
    }
}
