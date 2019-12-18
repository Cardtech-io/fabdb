<?php
namespace FabDB\Library;

interface Repository
{
    public function save(Model $model);
    
    public function delete(string $slug);
}
