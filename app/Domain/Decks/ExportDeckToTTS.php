<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Cards;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class ExportDeckToTTS
{
    /**
     * @var int
     */
    private $deckId;
    /**
     * @var TTSObserver
     */
    private $observer;

    public function __construct(int $deckId, TTSObserver $observer)
    {
        $this->deckId = $deckId;
        $this->observer = $observer;
    }

    public function handle(DeckRepository $decks)
    {
        $deck = $decks->find($this->deckId);

        $this->createTTSIDs($deck->cards);

        $json = $this->generateJson($deck);

        $this->observer->send($json);
    }

    private function generateJson($deck)
    {
        $images = $this->deckImages($deck);

        $this->execute($deck->slug, $images);

        $json = [
            'ObjectStates' => [
                [
                    'Transform' => [
                        'posX' => 0,
                        'posY' => 1,
                        'posZ' => 0,
                        'rotX' => 0,
                        'rotY' => 180,
                        'rotZ' => 180,
                        'scaleX' => 1,
                        'scaleY' => 1,
                        'scaleZ' => 1
                    ],
                    'Name' => 'DeckCustom',
                    'ContainedObjects' => $this->cardsToTTS($deck->cards),
                    'DeckIDs' => $this->cardIds($deck->cards),
                    'CustomDeck' => [
                        1 => [
                            'NumWidth' => $deck->cards->count(),
                            'NumHeight' => 1,
                            'FaceURL' => 'https://fabdb.imgix.net/decks/tts/'.$deck->slug.'.png',
                            'FaceBack' => 'https://fabdb.imgix.net/cards/backs/card-back-1.png'
                        ]
                    ]
                ]
            ]
        ];
        
        return json_encode($json, JSON_UNESCAPED_SLASHES);
    }

    private function cardsToTTS(Cards $cards): array
    {
        $json = [];

        foreach ($cards as $card) {
            for ($i = 1; $i <= $card->pivot->total; $i++) {
                $json[] = [
                    'Name' => 'Card',
                    'Nickname' => $card->name,
                    'Transform' => $this->cardTransform(),
                    'CardID' => (string) $card->ttsId
                ];
            }
        }

        return $json;
    }

    private function cardTransform(): array
    {
        return [
            'posX' => 0,
            'posY' => 1,
            'posZ' => 0,
            'rotX' => 0,
            'rotY' => 180,
            'rotZ' => 180,
            'scaleX' => 1,
            'scaleY' => 1,
            'scaleZ' => 1
        ];
    }

    private function cardIds(Cards $cards): array
    {
        return $cards->pluck('ttsId')->toArray();
    }

    /**
     * Creates the image necessary for rendering the custom deck for TTS.
     *
     * @param Deck $deck
     * @return array
     */
    private function deckImages(Deck $deck): array
    {
        $images = $deck->cards->map(function(Card $card) {
            return $this->cardImagePath($card->identifier);
        })->toArray();

        // Now we push the "hidden" card back:
        $images[] = Storage::disk('scraped')->path('card-back-1.png');

        return $images;
    }

    private function cardImagePath($identifier): string
    {
        list($set, $id) = str_split(strtolower($identifier), 3);

        $id = preg_replace('/^0+/', '', $id);

        return Storage::disk('scraped')->path("$set/$id.png");
    }

    private function execute(string $deckSlug, array $images)
    {
        $arguments = array_merge(['gm', 'convert'], $images, ['+append', $this->deckSheetPath($deckSlug)]);

        $process = new Process($arguments);
        $process->run();

        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }
        
        // Now we send it to AWS
        Storage::disk('s3')->putFileAs('decks/tts', new File($this->deckSheetPath($deckSlug)), $deckSlug.'.png');
    }

    private function deckSheetPath(string $deckSlug)
    {
        return Storage::path('tmp/'.$deckSlug.'.png');
    }

    private function createTTSIDs(Cards $cards)
    {
        foreach ($cards as $id => $card) {
            $card->ttsId = 1000 + $id;
        }
    }
}
