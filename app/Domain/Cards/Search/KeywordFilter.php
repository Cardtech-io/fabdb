<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Library\Search\SearchFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class KeywordFilter implements SearchFilter
{
    use Identifiable;

    public function applies(array $input)
    {
        return isset($input['keywords']) && !empty($input['keywords']) &&
            !$this->matchesIdentifier($input['keywords']) &&
            $this->hasKeywords($input['keywords']);
    }

    public function applyTo(Builder $query, array $input)
    {
        $keywords = $this->filter($input['keywords']);

        $query->where(function($query) use ($keywords) {
            foreach ($keywords as $keyword) {
                $search = addslashes($keyword);
                $query->whereRaw("search_text LIKE ?", ["%$search%"]);
            }
        });
    }

    private function hasKeywords(string $keywords)
    {
        return count($this->filter($keywords)) > 0;
    }

    private function filter(string $keywords): array
    {
        $keywords = preg_split('/\s(?=([^"]*"[^"]*")*[^"]*$)/', $keywords);

        return array_filter($keywords, function($keyword) {
            return !Str::contains($keyword, ['=', '>', '<']);
        });
    }
}
