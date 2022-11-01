<?php
namespace FabDB\Library\Search;

use Illuminate\Support\Arr;

trait MultiArrayFormats
{
    /**
     * Forces an input value to an array, if it does or does not match particular formats.
     *
     * @param mixed $input
     * @return array
     */
    protected function toArray($input): array
    {
        return is_array($input) ? $input : Arr::flatten([explode(',', strtolower($input))]);
    }
}
