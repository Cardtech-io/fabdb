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

    public function getRandom(Rarity $rarity, array $exclude = []): Card
    {
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
}
