<?php
namespace FabDB\Domain\Cards\Boosters;

use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Set;
use Illuminate\Database\Eloquent\Collection;

class Packs
{
    private $box;

    public function __construct(BoosterRepository $packs)
    {
        $this->box = $packs;
    }

    public function generate(Set $set)
    {
        $this->box->useSet($set);

        $class = $this->box->getRandomCommons('other', 7);
        $equipment = $this->box->getRandomEquipmentCommon();
        $rare1 = $this->box->getRandom(new Rarity('R'));
        $rare2 = $this->box->getRandom(new Rarity($this->randomRarity()));
        $foil = $this->box->getRandomFoil();

        $generics = $this->box->getRandomCommons('generic', 4);
        $token1 = $this->box->getRandom(new Rarity('T'));

        $pack = $class;

        if ($set->is(new Set('wtr'))) {
            $pack->add($equipment);
        }

        $pack->add($rare1)
            ->add($rare2)
            ->add($foil);

        if ($set->is(new Set('arc'))) {
            $pack->add($equipment);
        }

        $pack = $this->merge($pack, $generics);

        $pack->add($token1);

        // When cracked bauble is generated, this is the only token available, as it's not double-sided, unlike others.
        if ($token1->id != 224) {
            $token2 = $this->box->getRandom(new Rarity('T'), [$token1->id, 224]); // 224 is cracked bauble
            $pack->add($token2);
        }

        return $pack;
    }

    /**
     * Generates a random rarity for the special rare slot.
     *
     * @return int|string
     * @throws \Exception
     */
    private function randomRarity()
    {
        $chances = ['R' => [0, 75], 'S' => [76, 92], 'M' => [93, 100]];

        $roll = rand(0, 100);

        foreach ($chances as $rarity => $chance) {
            if ($roll >= $chance[0] && $roll <= $chance[1]) {
                return $rarity;
            }
        }

        throw new \Exception('No rarity found.');
    }

    private function merge(Collection $pack, Collection $generics)
    {
        foreach ($generics as $generic) {
            $pack->add($generic);
        }

        return $pack;
    }
}
