<?php
namespace FabDB\Domain\Voting;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Comments\CommentRepository;
use FabDB\Domain\Content\ArticleRepository;
use FabDB\Domain\Decks\DeckRepository;

class VoteableId
{
    /**
     * @var CardRepository
     */
    private $cards;

    /**
     * @var CommentRepository
     */
    private $comments;

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
        CommentRepository $comments,
        DeckRepository $decks
    ) {
        $this->articles = $articles;
        $this->cards = $cards;
        $this->comments = $comments;
        $this->decks = $decks;
    }

    public function getId(string $type, $foreign)
    {
        switch ($type) {
            case 'article':
                return $this->articles->view($foreign, false)->id;
            case 'card':
                return $this->cards->findByIdentifier($foreign)->id;
            case 'comment':
                return $this->comments->bySlug($foreign)->id;
            case 'deck':
                return $this->decks->bySlug($foreign)->id;
        }

        throw new InvalidVoteType;
    }
}
