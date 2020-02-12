<?php
namespace FabDB\Domain\Comments;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\DeckRepository;

class Commentable
{
    /**
     * @var CardRepository
     */
    private $cards;

    /**
     * @var DeckRepository
     */
    private $decks;

    public function __construct(CardRepository $cards, DeckRepository $decks)
    {
        $this->cards = $cards;
        $this->decks = $decks;
    }

    public function getId(string $type, $foreign)
    {
        switch ($type) {
            case 'card':
                return $this->cards->findByIdentifier($foreign)->id;
            case 'deck':
                return $this->decks->bySlug($foreign)->id;
        }
    }
}
