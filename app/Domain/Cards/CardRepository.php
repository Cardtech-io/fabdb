<?php
namespace FabDB\Domain\Cards;

use Illuminate\Database\Eloquent\Collection;

interface CardRepository
{
    public function search(string $useCase, array $keywords, $class, $type, $view, int $userId = null);

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
     * @param $rarity
     * @return Card
     */
    public function getRandom(Rarity $rarity): Card;

    /**
     * Returns a random card as a foil.
     *
     * @return Card
     */
    public function getRandomFoil(): Card;
}
