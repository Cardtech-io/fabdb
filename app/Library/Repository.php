<?php
namespace FabDB\Library;

use Illuminate\Support\Collection;

interface Repository
{
    public function save(Model $model);
    
    public function delete(string $slug);

    public function all(): Collection;
}
