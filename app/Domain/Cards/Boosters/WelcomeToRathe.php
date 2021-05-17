<?php
namespace FabDB\Domain\Cards\Boosters;

use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Set;

class WelcomeToRathe implements PackGenerator
{
    use GeneratesPacks;

    private BoosterRepository $box;

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
            ->merge($this->box->getRandomCommons('generic', 4))
            ->add($this->box->getRandomEquipmentCommon())
            ->add($this->box->getRandom(new Rarity('R')))
            ->add($this->box->getRandom())
            ->add($this->box->getRandomFoil())
            ->merge($this->tokens());
    }
}
