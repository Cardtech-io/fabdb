<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Library\PDF;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

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

        $pdf = $this->requestPDF($deck);

        $pdfFile = "tmp/{$deck->slug}.pdf";

        Storage::put($pdfFile, $pdf);

        $pdfPath = Storage::path($pdfFile);
        $zipPath = Storage::path("tmp/{$deck->slug}.zip");

        $zip = new ZipArchive;

        if ($zip->open($zipPath, ZipArchive::CREATE) !== true) {
            throw new \Exception('Cannot open zip file.');
        }

        $zip->addFile($pdfPath, "/deck.pdf");
        $zip->addFromString("/deck.txt", $this->shareText($deck));
        $zip->addFromString('/deck.csv', $this->csvContents($deck));
        $zip->close();

        Mail::send('emails.deck-registration', [], function($message) use ($deck, $zipPath) {
            $message->to($deck->user->email);
            $message->subject('Tournament pack for Deck Registration | fabdb.net');
            $message->attach($zipPath, ['as' => 'Tournament pack.zip']);
        });
    }

    /**
     * @return string
     */
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

    private function shareText(Deck $deck)
    {
        $weapons = $deck->weapons()->map(function(Card $weapon) {
            return '('.$weapon->total.') '.$weapon->name;
        })->join(', ');

        $equipment = $deck->equipment()->map(function(Card $equipment) {
            return $equipment->name;
        })->join(', ');

        $text = [
            $deck->name,
            '',
            'Class: '.ucfirst($deck->hero()->keywords[0]),
            'Hero: '.$deck->hero()->name,
            'Weapons: '.$weapons,
            'Equipment: '.$equipment,
            ''
        ];

        $other = $deck->other()->sortBy('name')->map(function(Card $card) {
            return '('.$card->total.') '.$card->name.' ('.$this->colourToText($card->stats['resource']).')';
        })->toArray();

        return implode("\n", array_merge($text, $other));
    }

    private function colourToText($pitch)
    {
        $colours = [
            1 => 'red',
            2 => 'yellow',
            3 => 'blue'
        ];

        return $colours[$pitch] ?? '';
    }

    private function csvContents(Deck $deck)
    {
        $csv = [
            'Card name|Pitch|Total',
            implode('|', [$deck->hero()->name, null, 1]),
            implode('|', [$deck->weapon()->name, null, $deck->weapon()->total])
        ];

        foreach ($deck->equipment() as $card) {
            $csv[] = implode('|', [$card->name, null, 1]);
        }

        foreach ($deck->other()->sortBy('name') as $card) {
            $csv[] = implode('|', [$card->name, $card->stats['resource'], 1]);
        }

        return implode("\n", $csv);
    }
}
