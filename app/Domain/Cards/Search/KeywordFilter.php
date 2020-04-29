<?php
namespace FabDB\Domain\Cards\Search;

class KeywordFilter
{
    public function applies(array $input)
    {
        return isset($input['keywords']) && count($this->getWords($input['keywords']));
    }
    
    public function applyTo($query, array $input)
    {
        $words = $this->getWords($input['keywords']);

        $query->whereRaw("MATCH(search_text) AGAINST ('$words' IN BOOLEAN MODE)");
    }

    private function getWords(array $keywords): array
    {
        return array_filter($keywords, function($keyword) {
            return preg_match('/^[a-z]+$/i', $keyword);
        });
    }
}
