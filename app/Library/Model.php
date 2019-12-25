<?php
namespace FabDB\Library;

use Eloquence\Behaviours\CamelCasing;

abstract class Model extends \Illuminate\Database\Eloquent\Model
{
    use CamelCasing;
}
