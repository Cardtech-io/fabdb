<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Cards;
use Illuminate\Http\File;
use Illuminate\Support\Arr;
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

        $this->cardIds($deck->cards);

        $json = $this->generateJson($deck);

        $this->observer->send($json);
    }

    private function generateJson($deck)
    {
        $images = $this->deckImages($deck);

        $this->execute($deck->slug, $images);
        
        $grid = $this->determineGrid(count($images));
        
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
                        'scaleX' => 1.64,
                        'scaleY' => 1,
                        'scaleZ' => 1.64
                    ],
                    'Name' => 'DeckCustom',
                    'Nickname' => $deck->name,
                    'ContainedObjects' => $this->cardsToTTS($deck->cards),
                    'DeckIDs' => $this->cardIds($deck->cards),
                    'CustomDeck' => [
                        1 => [
                            'NumWidth' => $grid['width'],
                            'NumHeight' => $grid['height'],
                            'FaceURL' => 'http://fabdb.imgix.net/decks/tts/'.$deck->slug.'.png',
                            'BackURL' => 'http://fabdb.imgix.net/cards/backs/card-back-1.png'
                        ]
                    ]
                ]
            ]
        ];
        
        return json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
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
                    'CardID' => $card->ttsId
                ];
            }
        }

        return $json;
    }

    private function cardTransform(): array
    {
        return [
            'posX' => 0,
            'posY' => 0,
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
        return Arr::flatten($cards->reduce(function($carry, $card) {
            return array_merge($carry, array_fill(0, $card->pivot->total, [$card->ttsId]));
        }, []));
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
        $grid = $this->determineGrid(count($images));

        $imageWidth = 450;
        $imageHeight = 628;

        $arguments = array_merge(['gm', 'montage', "-tile", "{$grid['width']}x{$grid['height']}", "-geometry", "{$imageWidth}x{$imageHeight}+0+0"], $images, [$this->deckSheetPath($deckSlug)]);

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
            $card->ttsId = 100 + $id;
        }
    }

    private function determineGrid(int $cardCount)
    {
        for ($i = 1; $i <= 7; $i++) {
            for ($b = 1; $b <= 10; $b++) {
                if ($i * $b >= $cardCount) return ['height' => $i, 'width' => $b];
            }
        }

        throw new \Exception('Impossible grid.');
    }
}
