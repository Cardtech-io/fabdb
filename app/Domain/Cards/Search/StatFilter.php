<?php
namespace FabDB\Domain\Cards\Search;

use Illuminate\Database\Eloquent\Builder;

class StatFilter implements SearchFilter
{
    public function applies(array $input)
    {
        return isset($input['keywords']) && $this->getParams($input['keywords'])->count();
    }

    public function applyTo(Builder $query, array $input)
    {
        $params = $this->getParams($input['keywords']);

        foreach ($params as $param) {
            $field = addslashes($param[1]);
            $operator = addslashes($param[2]);
            $value = addslashes($param[3]);
            
            $query->where("stats->{$field}", $operator, $value);
        }
    }

    private function getParams(array $keywords)
    {
        return collect($keywords)->filter(function($keyword) {
            return preg_match('/[a-z]+[=><]{1,2}[0-9]{1,2}/i', $keyword);
        })->map(function($keyword) {
            preg_match('/([a-z]+)([=><]{1,2})([0-9]{1,2})/i', $keyword, $matches);

            if ($matches[1] == 'pitch') {
                $matches[1] = 'resource';
            }

            return $matches;
        });
    }
}
