<?php
namespace FabDB\Domain\Comments;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Content\ArticleRepository;
use FabDB\Domain\Decks\DeckRepository;

class CommentableId
{
    /**
     * @var CardRepository
     */
    private $cards;

    /**
     * @var DeckRepository
     */
    private $decks;

    /**
     * @var ArticleRepository
     */
    private $articles;

    public function __construct(
        ArticleRepository $articles,
        CardRepository $cards,
        DeckRepository $decks
    ) {
        $this->articles = $articles;
        $this->cards = $cards;
        $this->decks = $decks;
    }

    public function getId(string $type, $foreign)
    {
        switch ($type) {
            case 'article':
                return $this->articles->view($foreign, false)->id;
            case 'card':
                return $this->cards->findByIdentifier($foreign)->id;
            case 'deck':
                return $this->decks->bySlug($foreign)->id;
        }

        throw new InvalidCommentType;
    }
}
