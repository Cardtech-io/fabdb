<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;

class KeywordFilter implements SearchFilter
{
    use Identifiable;

    public function applies(array $input)
    {
        return isset($input['keywords']) && !empty($input['keywords']) && !$this->matches($input['keywords']);
    }
    
    public function applyTo(Builder $query, array $input)
    {
        $words = $this->getWords($input['keywords']);
        $search = implode(' ', $words);

        if (count($words) > 1) {
            $query->whereRaw("MATCH(search_text) AGAINST ('$search' IN BOOLEAN MODE)");
        } else {
            $query->where('search_text', 'LIKE', '%'.$search.'%');
        }
    }

    private function getWords($keywords): array
    {
        $keywords = collect(explode(' ', $keywords))->map(function($keyword) {
            return addslashes($keyword);
        })->filter()->toArray();

        return array_filter($keywords, function($keyword) {
            return preg_match('/^[a-z]+$/i', $keyword);
        });
    }
}
