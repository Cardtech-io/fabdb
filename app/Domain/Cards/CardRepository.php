<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Users\User;
use Illuminate\Database\Eloquent\Collection;

interface CardRepository
{
    public function search(string $useCase, array $keywords, $class, $type, $set, $view = 'all', User $user = null);

    public function findByIdentifier(string $identifier, int $userId = null);

    /**
     * Look for a number of class commons.
     *
     * @param $class - Can be generic or other
     * @param int $num
     * @return Collection
     */
    public function getRandomCommons($class, int $num): Collection;

    /**
     * Pull 1 random equipment common.
     *
     * @return Card
     */
    public function getRandomEquipmentCommon(): Card;

    /**
     * Retrieve a single random rare from the database.
     *
     * @param Rarity $rarity
     * @param array $exclude
     * @return Card
     */
    public function getRandom(Rarity $rarity, array $exclude = []): Card;

    /**
     * Returns a random card as a foil.
     *
     * @return Card
     */
    public function getRandomFoil(): Card;
}
