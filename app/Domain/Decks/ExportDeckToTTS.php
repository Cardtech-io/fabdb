<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Cards;

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
        $json = $this->generateJson($deck);

        $this->observer->send($json);
    }

    private function generateJson($deck)
    {
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
                    'ContainedObjects' => $this->cardsToTTS($deck->cards)
                ]
            ]
        ];
        
        return json_encode($json);
    }

    private function cardsToTTS(Cards $cards): array
    {
        $json = [];

        foreach ($cards as $card) {
            $json[] = [
                'Name' => 'Card',
                'Nickname' => $card->name,
                'Transform' => $this->cardTransform(),
                'CardID' => (string) $card->identifier
            ];
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
}
