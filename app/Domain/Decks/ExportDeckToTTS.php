<?php
namespace FabDB\Domain\Decks;

use FabDB\Domain\Cards\Card;

class ExportDeckToTTS
{
    /**
     * @var int
     */
    private $deckId;

    public function __construct(int $deckId)
    {
        $this->deckId = $deckId;
    }

    public function handle(DeckRepository $decks)
    {
        $deck = $decks->find($this->deckId);

        $json = $this->generateJson($deck);

        dd($json);
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

    private function cardsToTTS(Card $cards): array
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
