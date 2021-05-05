<?php
namespace FabDB\Domain\Cards\Boosters;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Set;
use Illuminate\Database\Eloquent\Collection;

interface PackRepository
{
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

    /**
     * Use the set provided for all future queries.
     *
     * @param Set $set
     * @return mixed
     */
    public function useSet(Set $set);
}
