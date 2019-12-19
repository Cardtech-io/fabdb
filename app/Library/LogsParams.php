<?php
namespace FabDB\Library;

trait LogsParams
{
    public function log(): array
    {
        return get_object_vars($this);
    }
}
