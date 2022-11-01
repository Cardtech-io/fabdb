<?php
namespace FabDB\Domain\Cards\Boosters;

use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Set;

class Uprising implements PackGenerator
{
    use GeneratesPacks;

    private $box;

    public function __construct(BoosterRepository $box)
    {
        $this->box = $box;
    }

    public function isFor(Set $set)
    {
        return $set->is(new Set('upr'));
    }

    public function generate(Set $set)
    {
        $this->box->useSet($set);

        return $this->box->getRandomCommons('generic', 3)
            ->add($this->box->getRandomEquipmentCommon())
            ->add($this->box->getRandom(new Rarity('R')))
            ->add($this->box->getRandom($this->randomRarity(false)))
            ->add($this->box->getRandomFoil())
            ->concat($this->box->getRandomCommons('other', 5))
            ->concat($this->tokens());
    }
}
