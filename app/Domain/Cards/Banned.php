<?php
namespace FabDB\Domain\Cards;

use Illuminate\Support\Collection;

class Banned extends Collection
{
    public function blitz()
    {
        return $this->filter(function($formats) {
            return in_array('blitz', $formats);
        })->keys()->toArray();
    }

    public function constructed()
    {
        return $this->filter(function($formats) {
            return in_array('constructed', $formats);
        })->keys()->toArray();
    }
}
