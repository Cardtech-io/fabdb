<?php
namespace FabDB\Domain\Cards\Search;

trait Identifiable
{
    protected function matchesIdentifier(string $keywords)
    {
        // @TODO when doing multiple sites, sites could specify their own regex for identifier matching
        return count(explode(' ', $keywords)) == 1 && (is_numeric($keywords) || preg_match('/^([a-z]{3})?[0-9]{3}$/i', $keywords));
    }
}
