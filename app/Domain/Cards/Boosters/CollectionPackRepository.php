<?php
namespace FabDB\Domain\Cards\Boosters;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Set;
use Illuminate\Database\Eloquent\Collection;

class CollectionPackRepository implements PackRepository
{
    /**
     * Pool of cards to generate the boosters from. This should contain all cards from a given set.
     *
     * @var Collection
     */
    private Collection $pool;

    /**
     * @var CardRepository
     */
    private CardRepository $cards;

    public function __construct(CardRepository $cards)
    {
        $this->cards = $cards;
    }

    public function getRandomCommons($class, int $num): Collection
    {

    }

    public function getRandomEquipmentCommon(): Card
    {

    }

    public function getRandom(Rarity $rarity, array $exclude = []): Card
    {

    }

    public function getRandomFoil(): Card
    {

    }

    public function useSet(Set $set)
    {
        $this->pool = $this->cards->forPacks($set);
    }
}
