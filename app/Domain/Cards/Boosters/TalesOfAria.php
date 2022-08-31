<?php
namespace FabDB\Domain\Cards\Boosters;

use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Set;

class TalesOfAria implements PackGenerator
{
    use GeneratesPacks;

    private $box;

    public function __construct(BoosterRepository $box)
    {
        $this->box = $box;
    }

    public function isFor(Set $set)
    {
        return $set->is(new Set('ele'));
    }

    public function generate(Set $set)
    {
        $this->box->useSet($set);

        return $this->box->getRandomTalentCommons(null, 5)
            ->add($this->box->getRandom(new Rarity('R')))
            ->add($this->box->getRandom($this->randomRarity(false)))
            ->add($this->box->getRandomFoil())
            ->add($this->box->getRandomEquipmentCommon())
            ->concat($this->box->getRandomCommons('other', 6))
            ->concat($this->tokens());
    }
}
