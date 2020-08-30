<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class KeywordFilter implements SearchFilter
{
    use Identifiable;

    public function applies(array $input)
    {
        return isset($input['keywords']) && !empty($input['keywords']) && !$this->matchesIdentifier($input['keywords']) && $this->keywordsOnly($input);
    }

    public function applyTo(Builder $query, array $input)
    {
        $search = addslashes($input['keywords']);

        $query->whereRaw("search_text LIKE ?", ["%$search%"]);
    }

    private function keywordsOnly(array $input)
    {
        return !Str::contains($input['keywords'], ['=', '>', '<']);
    }
}
