<?php
namespace FabDB\Domain\Cards\Search;

trait Identifiable
{
    protected function matchesIdentifier(string $keywords)
    {
        $keywords = preg_split('/[\s,]+/', $keywords);

        foreach ($keywords as $keyword) {
            if (is_numeric($keyword) || preg_match('/^(U-)?([a-z]{3})?[0-9]{3}$/i', $keyword) || is_numeric(strpos($keyword, '-'))) {
                return true;
            }
        }

        return false;
    }
}
