<?php
namespace FabDB\Library;

use FabDB\Domain\Voting\Voteable;
use Illuminate\Database\Eloquent\ModelNotFoundException;
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
        $this->newQuery()
            ->whereSlug($slug)
            ->delete();
    }

    public function all(): Collection
    {
        return $this->newQuery()->get();
    }

    public function find(int $id): Model
    {
        return $this->newQuery()->whereId($id)->first();
    }

    public function bySlug(string $slug): Model
    {
        $query = $this->newQuery()->select($this->model()->getTable().'.*');

        $model = $this->slugQuery($query, $slug)->first();

        if (!$model) {
            throw new ModelNotFoundException;
        }

        return $model;
    }

    protected function slugQuery($query, string $slug)
    {
        if (in_array(Voteable::class, class_uses($this->model()))) {
            $query->withVotes();
        }

        return $query->where($this->model()->getTable().'.slug', $slug);
    }
}
