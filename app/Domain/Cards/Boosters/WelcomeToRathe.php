<?php
namespace FabDB\Domain\Cards\Boosters;

use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Set;

class WelcomeToRathe implements PackGenerator
{
    use GeneratesPacks;

    private $box;

    public function __construct(BoosterRepository $box)
    {
        $this->box = $box;
    }

    public function isFor(Set $set)
    {
        return $set->is(new Set('wtr'));
    }

    public function generate(Set $set)
    {
        $this->box->useSet($set);

        return $this->box->getRandomCommons('other', 7)
            ->add($this->box->getRandomEquipmentCommon())
            ->add($this->box->getRandom(new Rarity('R')))
            ->add($this->box->getRandom($this->randomRarity(true)))
            ->add($this->box->getRandomFoil())
            ->concat($this->box->getRandomCommons('generic', 4))
            ->concat($this->tokens());
    }
}
