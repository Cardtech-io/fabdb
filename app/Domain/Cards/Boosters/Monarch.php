<?php
namespace FabDB\Domain\Cards\Boosters;

use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Set;

class Monarch implements PackGenerator
{
    use GeneratesPacks;

    private BoosterRepository $box;

    public function __construct(BoosterRepository $box)
    {
        $this->box = $box;
    }

    public function isFor(Set $set)
    {
        return $set->is(new Set('mon'));
    }

    public function generate(Set $set)
    {
        $this->box->useSet($set);

        return $this->box->getRandomCommons('other', 6)
            ->merge($this->box->getRandomCommons('generic', 5))
            ->add($this->box->getRandomFoil())
            ->add($this->box->getRandomEquipmentCommon())
            ->add($this->box->getRandom(new Rarity('R')))
            ->add($this->box->getRandom($this->randomRarity(false)))
            ->merge($this->tokens());
    }
}
