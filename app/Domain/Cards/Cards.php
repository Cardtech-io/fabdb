<?php
namespace FabDB\Domain\Cards;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Arr;

class Cards extends Collection
{
    public function hasWeapon()
    {
        return $this->first(function(Card $card) {
            return $card->isWeapon();
        });
    }

    public function hero()
    {
        return $this->first(function(Card $card) {
            return $card->isHero();
        });
    }

    public function weapons()
    {
        return $this->filter(function(Card $card) {
            return $card->isWeapon();
        })->values();
    }

    public function equipment()
    {
        return $this->filter(function(Card $card) {
            return $card->isEquipment();
        })->values();
    }

    public function other($pitch = null)
    {
        return $this->filter(function(Card $card) {
            return !($card->isEquipment() || $card->isWeapon() || $card->isHero());
        })->filter(function(Card $card) use ($pitch) {
            if (!$pitch) return true;

            return Arr::get($card->stats, 'resource') === "$pitch";
        })->values();
    }

    public function equipmentTotal()
    {
        return $this->equipment()->sum('total') + $this->weapons()->sum('total');
    }

    public function otherTotal()
    {
        return $this->other()->sum('total');
    }

    public function total()
    {
        return $this->filter(function(Card $card) {
            return !$card->isHero();
        })->sum('total');
    }
}
