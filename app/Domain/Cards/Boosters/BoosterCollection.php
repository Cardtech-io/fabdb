<?php
namespace FabDB\Domain\Cards\Boosters;

use Illuminate\Support\Collection;

class BoosterCollection extends Collection
{
    public function talent($talent)
    {
        return $this->filter(fn($card) => $card->talent === $talent);
    }

    public function klass($class)
    {
        return $this->filter(fn($card) => $card->class === $class);
    }

    public function rarity($rarity)
    {
        return $this->filter(fn($card) => $card->rarity->matches($rarity));
    }

    public function type($type)
    {
        return $this->filter(fn($card) => $card->type === $type);
    }
}
