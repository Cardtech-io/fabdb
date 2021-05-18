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
        $commons = $this->filter(function(Card $card) use ($class) {
            $truthy = $class === 'generic' ? $card->isGeneric() : !$card->isGeneric();

            return $truthy && $card->rarity->equals(new Rarity('C')) && !$card->isEquipment();
        })->random($num);

        info('Commons:'.$commons->count());

        return $commons;
    }

    public function getRandomEquipmentCommon(): Card
    {
        return $this->filter(function(Card $card) {
            return !$card->rarity->equals(new Rarity('L')) && $card->isEquipment();
        })->random();
    }

    public function getRandom(Rarity $rarity, array $exclude = []): Card
    {
        $rarity = $rarity ?? $this->randomRarity();

        return $this->filter(function(Card $card) use ($rarity, $exclude) {
            return !empty($exclude) ? $card->rarity->matches($rarity->raw()) && !in_array($card->id, $exclude) : $card->rarity->matches($rarity);
        })->random();
    }

    public function getRandomFoil(): Card
    {
        $roll = rand(1, 96);

        if ($roll === 96) {
            $callback = function(Card $card) {
                return $card->rarity->equals(new Rarity('L'));
            };
        } elseif ($roll % 24 === 0) {
            $callback = function(Card $card) {
                return $card->rarity->equals(new Rarity('C')) && $card->isEquipment();
            };
        } else {
            $callback = function(Card $card) {
                return $card->rarity->matches('C', 'R', 'M');
            };
        }

        // 1 cf common/majestic per 24 packs
        // 1 legendary cf per 96 packs
        return $this->filter(function(Card $card) use ($callback) {
            return !$card->rarity->token() && !$card->isHero() && $callback($card);
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

    public function getTokens(int $num): Collection
    {
        return $this->filter(function(Card $card) {
            return $card->rarity->token() && !$card->isHero();
        })->random($num);
    }
}
