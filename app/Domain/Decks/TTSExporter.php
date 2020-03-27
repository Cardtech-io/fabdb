<?php
namespace FabDB\Domain\Decks;

use Carbon\Carbon;
use FabDB\Domain\Cards\Card;
use Illuminate\Http\File;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class TTSExporter
{
    /**
     * @var Deck
     */
    private $deck;

    public function __construct(Deck $deck)
    {
        $this->deck = $deck;

        $this->createIds();
    }

    /**
     * Constructs the necessary deck id structure for the JSON document.
     *
     * @return array
     */
    public function deckIds(): array
    {
        return Arr::flatten($this->deck->cards->reduce(function($carry, $card) {
            return array_merge($carry, array_fill(0, $card->pivot->total, [$card->ttsId]));
        }, []));
    }

    /**
     * Creates the required tabletop simulator ids for the deck.
     */
    private function createIds()
    {
        foreach ($this->deck->cards as $id => $card) {
            $card->ttsId = 100 + $id;
        }
    }

    public function save()
    {
        $this->deck->decksheet = $this->deckSheetName();
        $this->deck->decksheetCreatedAt = new Carbon;

        app(DeckRepository::class)->save($this->deck);
    }

    public function generateJson(Deck $deck)
    {
        $grid = $this->determineGrid($deck->cards->count() + 1);

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
                    'ContainedObjects' => $this->cardsToTTS(),
                    'DeckIDs' => $this->deckIds(),
                    'CustomDeck' => [
                        1 => [
                            'NumWidth' => $grid['width'],
                            'NumHeight' => $grid['height'],
                            'FaceURL' => 'http://fabdb.imgix.net/decks/tts/'.$deck->decksheet,
                            'BackURL' => 'http://fabdb.imgix.net/cards/backs/card-back-1.png'
                        ]
                    ]
                ]
            ]
        ];

        return json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }

    private function cardsToTTS(): array
    {
        $json = [];

        foreach ($this->deck->cards as $card) {
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

    /**
     * Creates the image necessary for rendering the custom deck for TTS.
     *
     * @return array
     */
    public function deckImages(): array
    {
        $images = $this->deck->cards->map(function(Card $card) {
            return $this->cardImagePath($card->identifier);
        })->toArray();

        // Now we push the "hidden" card back:
        $images[] = Storage::disk('scraped')->path('card-back-1.png');

        return $images;
    }

    private function cardImagePath($identifier): string
    {
        list($set, $id) = str_split(strtolower($identifier), 3);

        $id = preg_replace('/^0{1,2}/', '', $id);

        return Storage::disk('scraped')->path("$set/$id.png");
    }

    /**
     * Creates the image montage for the deck sheet and uploads to S3.
     */
    public function execute()
    {
        $images = $this->deckImages();
        $grid = $this->determineGrid(count($images));

        $imageWidth = 450;
        $imageHeight = 628;

        $arguments = array_merge(['gm', 'montage', "-tile", "{$grid['width']}x{$grid['height']}", "-geometry", "{$imageWidth}x{$imageHeight}+0+0"], $images, [$this->deckSheetPath()]);

        $process = new Process($arguments);
        $process->run();

        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        // Now we send it to AWS
        Storage::disk('s3')->putFileAs('decks/tts', new File($this->deckSheetPath()), $this->deckSheetName());

        $this->cleanup($this->deckSheetPath());
    }

    private function deckSheetPath(): string
    {
        return Storage::path('tmp/'.$this->deckSheetName());
    }

    /**
     * Creates the deck's image filename.
     *
     * @return string
     */
    private function deckSheetName(): string
    {
        static $filename;

        if (!$filename) {
            $filename = $this->deck->slug.'-'.time().'.png';
        }

        return $filename;
    }

    /**
     * Determines the minimum grid size for the deck sheet image.
     *
     * @param int $cardCount
     * @return array
     * @throws \Exception
     */
    private function determineGrid(int $cardCount)
    {
        for ($i = 1; $i <= 7; $i++) {
            for ($b = 1; $b <= 10; $b++) {
                if ($i * $b >= $cardCount) return ['height' => $i, 'width' => $b];
            }
        }

        throw new \Exception('Impossible grid.');
    }

    /**
     * Cleans up any left over artifacts from the deck sheet creation, freeing up a lot of space on the HDD.
     *
     * @param string $deckSheetPath
     */
    private function cleanup(string $deckSheetPath)
    {
        Storage::delete($deckSheetPath);
    }
}
