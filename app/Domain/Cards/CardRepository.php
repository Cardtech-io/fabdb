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

    public function getFirstByNumber(string $number);

    /**
     * Will return a collection of card IDs based on the card slugs/identifiers.
     *
     * @param array $identifiers
     * @return array
     */
    public function getAllIdsByIdentifiers(array $identifiers): array;

    /**
     * Will return a collection of card IDs based on the card skus.
     *
     * @param array $numbers
     * @return array
     */
    public function getAllIdsByCardNumbers(array $numbers): array;

    /**
     * View a specific card, and retrieve the previous/next card ids, as well.
     *
     * @param string $identifier
     * @param array $related
     * @return Card
     */
    public function view(string $identifier, array $related = []): Card;

    /**
     * Returns a card with the data needed for an ad.
     *
     * @param string $identifier
     * @param string $currency
     * @return mixed
     */
    public function ad(string $identifier, string $currency): Card;

    /**
     * Returns the first available identifier for a card set.
     *
     * @param string $set
     * @return string
     */
    public function getFirstIdentifier(string $set): string;

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

    /**
     * Return all cards, with limited information for front-end pack generation.
     *
     * @param Set $set
     * @return Collection
     */
    public function forPacks(Set $set): Collection;

    /**
     * Attempts to find a hero based on some fairly loose text usage from LSS.
     *
     * @param string $hero
     * @param string $heroAge
     * @return mixed
     */
    public function findHero($hero, string $heroAge);

    /**
     * Tried to find a card based on the identifier or via search text.
     *
     * @param string $identifier
     * @return mixed
     */
    public function getIdByIdentifierOrText(string $identifier);

    /**
     * Will attempt to find any card by using its search text field based on the string provided, and will return the first result.
     *
     * @param string $text
     * @return mixed
     */
    public function findAny(string $text);

    /**
     * Returns a collection of just the fabled cards of the game.
     *
     * @return Collection
     */
    public function fabled(): Collection;

    /**
     * Goes through all cards, and min/maxes the prices for cards, setting the last known price, and the current price.
     *
     * @return mixed
     */
    public function aggregatePrices(): Collection;

    /**
     * Returns a card based on the printing sku.
     *
     * @return Card|null
     */
    public function getByPrintingSku(string $sku): ?Card;
}
