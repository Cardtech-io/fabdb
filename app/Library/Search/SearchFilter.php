<?php
namespace FabDB\Library\Search;

use Illuminate\Database\Eloquent\Builder;

interface SearchFilter
{
    public function applies(array $input);

    public function applyTo(Builder $query, array $input);
}
