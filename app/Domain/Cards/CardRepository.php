<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Decks\Deck;
use FabDB\Domain\Users\User;
use FabDB\Library\Repository;
use Illuminate\Database\Eloquent\Collection;

interface CardRepository extends Repository
{
    public function search(?User $user, array $input);

    public function findByIdentifier(string $identifier, int $userId = null);

    /**
     * View a specific card, and retrieve the previous/next card ids, as well.
     *
     * @param string $identifier
     * @return Card
     */
    public function view(string $identifier): Card;

    /**
     * Returns the first available identifier for a card set.
     *
     * @param string $set
     * @return string
     */
    public function getFirstIdentifier(string $set): string;

    /**
     * Return a collection of cards and their prices.
     *
     * @param array $params
     * @return mixed
     */
    public function prices(array $params);

    /**
     * Finds the first card that matches the provided search conditions. This search is less feature-rich
     * than full search, but returns more in regards to the card details (similar to find).
     *
     * @param array $params
     * @return mixed
     */
    public function searchFirst(array $params);

    /**
     * Returns all the heroes in the game (that aren't banned).
     *
     * @return mixed
     */
    public function uniqueHeroes();

    /**
     * Card search specific to deck building.
     *
     * @param User $user
     * @param Deck $deck
     * @param array $input
     * @return mixed
     */
    public function buildSearch(User $user, Deck $deck, array $input);
}
