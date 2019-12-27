<?php
namespace FabDB\Domain\Cards;

use Illuminate\Database\Eloquent\Collection;

class Packs
{
    /**
     * @var CardRepository
     */
    private $cards;

    public function __construct(CardRepository $cards)
    {
        $this->cards = $cards;
    }

    public function generate()
    {
        // The first 5 slots, are class-specific common cards. We want to make sure we get distinct cards.
        $first5 = $this->cards->getRandomCommons('other', 4);
        $equipment = $this->cards->getRandomEquipmentCommon();
        $rare1 = $this->cards->getRandom(new Rarity('R'));
        $rare2 = $this->cards->getRandom(new Rarity($this->randomRarity()));
        $foil = $this->cards->getRandomFoil();
        $generics = $this->cards->getRandomCommons('generic', 6);
        $token1 = $this->cards->getRandom(new Rarity('T'));
        $token2 = $this->cards->getRandom(new Rarity('T'));

        $pack = $first5
            ->add($equipment)
            ->add($rare1)
            ->add($rare2)
            ->add($foil);

        $pack = $this->merge($pack, $generics);

        $pack->add($token1);
        $pack->add($token2);

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
