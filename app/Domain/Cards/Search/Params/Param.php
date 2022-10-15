<?php

namespace FabDB\Domain\Cards\Search\Params;

use FabDB\Library\Search\MultiArrayFormats;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Str;

abstract class Param implements Htmlable
{
    use MultiArrayFormats;

    /**
     * Returns an operator based on whether an inversion of logic is required. The operators
     * default to =/!=, but can be called to support LIKE/NOT LIKE.etc.
     *
     * @param bool $invert
     * @param string $truthy
     * @param string $falsey
     * @return mixed|string
     */
    protected function operator(bool $invert, string $truthy = '=', string $falsey = '!='): string
    {
        return $invert ? $falsey : $truthy;
    }

    abstract public function handles(string $filter): bool;

    abstract public function applyTo($query, string $operator, $value, bool $invert);

    abstract public function title(): string;

    public function toHtml()
    {
        $filename = Str::kebab(class_basename($this));

        return view("components.search.params.$filename", ['param' => $this])->render();
    }
}
