<?php
namespace FabDB\Library;

use Illuminate\Support\Collection;

interface Repository
{
    public function save(Model $model);

    public function delete(string $slug);

    public function all(): Collection;

    public function find(int $id): Model;

    public function bySlug(string $slug): Model;
}
