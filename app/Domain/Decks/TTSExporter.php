<?php
namespace FabDB\Domain\Decks;

use Carbon\Carbon;
use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Sku;
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

    /**
     * @var string
     */
    private $cardBack = 'card-back-1.png';

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

    public function setCardBack($cardBack)
    {
        if (!$cardBack) return;

        $backs = [
            1 => 'card-back-1.png',
            2 => 'card-back-2.jpg',
            3 => 'card-back-3.jpg',
            4 => 'card-back-4.jpg',
            5 => 'card-back-5.png',
            6 => 'card-back-6.png',
            7 => 'card-back-7.png',
            8 => 'card-back-8.png',
        ];

        $this->cardBack = $backs[$cardBack];
    }

    public function generateJson(Deck $deck)
    {
        $grid = $this->determineGrid($deck->cards->count() + 1);
        $deckImgDomain = 'fabdb.sfo2.cdn.digitaloceanspaces.com';

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
                            'FaceURL' => 'https://'.$deckImgDomain.'/decks/tts/'.$deck->decksheet,
                            'BackURL' => 'https://'.$deckImgDomain.'/cards/backs/'.$this->cardBack,
                            'BackIsHidden' => true
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
        $this->deck->load('cards.printings');

        $images = $this->deck->cards->map(function(Card $card) {
            return $this->cardImagePath($card->image);
        })->toArray();

        // Now we push the "hidden" card back:
        $images[] = Storage::disk('do')->path('card-back-1.png');

        return $images;
    }

    private function cardImagePath(Sku $sku): string
    {
        list($set, $id) = str_split(strtolower($sku->stripped()), 3);

        $id = preg_replace('/^0{1,2}/', '', $id);

        return Storage::disk('do')->path("$set/$id.png");
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
            $this->cleanup($this->deckSheetPath());

            throw new ProcessFailedException($process);
        }

        // Now we send it to AWS
        Storage::cloud()->putFileAs('decks/tts', new File($this->deckSheetPath()), $this->deckSheetName());

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

        throw new \Exception('Impossible grid for a card count of '.$cardCount.'.');
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

    /**
     * Purges an old deck sheet from the cloud.
     *
     * @param string $deckSheet
     */
    public function purge(string $deckSheet)
    {
        Storage::cloud()->delete('/decks/tts/'.$deckSheet);
    }
}
