<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;

interface SearchFilter
{
    public function applies(array $input);

    public function applyTo(Builder $query, array $input);
}
