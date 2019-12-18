<?php
namespace FabDB\Library;

abstract class EloquentRepository implements Repository
{
    protected function newQuery()
    {
        return $this->model()->newQuery();
    }

    abstract protected function model(): Model;

    public function save(Model $model)
    {
        $model->save();
    }

    public function delete(string $slug)
    {
        $this->newQuery()->whereSlug($slug)->delete();
    }
}
