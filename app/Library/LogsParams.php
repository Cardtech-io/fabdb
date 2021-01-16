<?php
namespace FabDB\Library;

trait LogsParams
{
    public function log(): array
    {
        return array_filter(get_object_vars($this), function($key) {
            return !in_array($key, $this->blacklisted());
        }, ARRAY_FILTER_USE_KEY);
    }

    private function blacklisted(): array
    {
        return [
            'password'
        ];
    }
}
