<?php

namespace FabDB\Domain\Cards\Search\Params;

trait StatParam
{
    abstract protected function stat(): string;

    public function applyTo($query, $operator, $value, bool $invert)
    {
        if ($value !== null) {
            $query->where('stats->'.$this->stat(), $this->operator($invert, $operator), $value);
        }
        else {
            $query->whereNull('stats->'.$this->stat());
        }
    }
}
