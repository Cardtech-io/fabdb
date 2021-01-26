<?php
namespace FabDB\Domain\Cards\Search;

trait Identifiable
{
    protected function matchesIdentifier(string $keywords)
    {
        return count(explode(' ', $keywords)) == 1 && (is_numeric($keywords) || preg_match('/^(U-)?([a-z]{3})?[0-9]{3}$/i', $keywords));
    }
}
