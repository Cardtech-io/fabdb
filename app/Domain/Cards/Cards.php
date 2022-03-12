<?php
namespace FabDB\Domain\Cards;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Arr;

class Cards extends Collection
{
    public function chunk($size)
    {
        if ($size <= 0) {
            return new static;
        }

        $chunks = [];

        foreach (array_chunk($this->items, $size, false) as $chunk) {
            $chunks[] = new static($chunk);
        }

        return new static($chunks);
    }
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
            if (is_null($pitch)) return true;

            if ($pitch === 0 && !Arr::has($card->stats, 'resource')) {
                return true;
            }

            return Arr::get($card->stats, 'resource') == $pitch;
        })->values();
    }

    public function equipmentTotal()
    {
        return $this->equipment()->sum('pivot.total') + $this->weapons()->sum('pivot.total');
    }

    public function otherTotal()
    {
        return $this->other()->sum('pivot.total');
    }

    public function total()
    {
        return $this->sum('pivot.total');
    }

    public function deckTotal()
    {
        return $this->filter(function(Card $card) {
            return !$card->isHero() && !$card->isToken();
        })->sum('pivot.total');
    }
}
