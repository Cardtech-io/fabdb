<?php

namespace FabDB\Domain\Cards\Search\Params;

use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

class Params extends Collection implements Htmlable
{
    public function __construct($items = [])
    {
        if (!$items) {
            $items = [
                new Set,
                new Klass,
                new CardType,
                new SubType,
                new Rarity,
                new Talent,
                new Power,
                new Defense,
                new Pitch,
                new Cost,
            ];
        }
        parent::__construct($items);
    }

    public function toHtml()
    {
        return implode('', $this->map(fn(Param $param) => $param->toHtml())->toArray());
    }
}
