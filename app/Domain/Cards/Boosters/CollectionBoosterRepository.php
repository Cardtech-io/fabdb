<?php
namespace FabDB\Domain\Cards\Boosters;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Cards\Rarity;
use FabDB\Domain\Cards\Set;
use Illuminate\Database\Eloquent\Collection;

class CollectionBoosterRepository implements BoosterRepository
{
    /**
     * Pool of cards to generate the boosters from. This should contain all cards from a given set.
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
        return $this->filter(function(Card $card) use ($class) {
            $truthy = $class === 'generic' ? $card->isGeneric() : !$card->isGeneric();
            return $truthy && $card->rarity->matches(new Rarity('C'));
        })->random($num);
    }

    public function getRandomEquipmentCommon(): Card
    {
        return $this->filter(function(Card $card) {
            return $card->rarity->matches(new Rarity('C')) && $card->isEquipment();
        })->random();
    }

    public function getRandom(Rarity $rarity = null, array $exclude = []): Card
    {
        $rarity = $rarity ?? $this->randomRarity();

        return $this->filter(function(Card $card) use ($rarity, $exclude) {
            return $exclude ? $card->rarity->matches($rarity) && !in_array($card->id, $exclude) : $card->rarity->matches($rarity);
        })->random();
    }

    public function getRandomFoil(): Card
    {
        return $this->filter(function(Card $card) {
            return !$card->rarity->token() && !$card->isHero();
        })->random();
    }

    public function useSet(Set $set)
    {
        $this->pool = $this->cards->forPacks($set);
    }

    private function filter(\Closure $callback)
    {
        return $this->pool->filter($callback);
    }

    private function randomRarity(): Rarity
    {
        $weighting = [
            'R' => [0, 75],
            'S' => [76, 92],
            'M' => [93, 100]
        ];

        $roll = rand(0, 100);

        foreach ($weighting as $rarity => $chance) {
            if ($roll >= $chance[0] && $roll <= $chance[1]) {
                return $rarity;
            }
        }
    }

    public function getTokens(int $num): Collection
    {
        return $this->filter(function(Card $card) {
            return $card->rarity->token() && !$card->isHero();
        })->random($num);
    }
}
