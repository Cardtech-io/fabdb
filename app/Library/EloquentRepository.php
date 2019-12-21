<?php
namespace FabDB\Library;

use Illuminate\Support\Collection;

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

    public function all(): Collection
    {
        return $this->newQuery()->get();
    }

    public function find(int $id): Model
    {
        return $this->newQuery()->whereId($id)->first();
    }
}
