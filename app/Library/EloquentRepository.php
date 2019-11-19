<?php
namespace FabDB\Library;

use Illuminate\Database\Eloquent\Model;

abstract class EloquentRepository
{
    protected function newQuery()
    {
        return $this->model()->newQuery();
    }

    abstract protected function model(): Model;
}
