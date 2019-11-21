<?php
namespace FabDB\Library;

interface Repository
{
    public function save(Model $model);
}
