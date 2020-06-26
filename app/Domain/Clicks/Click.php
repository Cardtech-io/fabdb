<?php
namespace FabDB\Domain\Clicks;

use FabDB\Library\Model;

class Click extends Model
{
    protected $fillable = ['clickableId', 'clickableType', 'url'];

    public function clickable()
    {
        return $this->morphTo(__FUNCTION__, 'clickable_type', 'clickable_id');
    }

    public static function register($clickableId, $clickableType, $url)
    {
        return static::create(compact('clickableId', 'clickableType', 'url'));
    }
}
