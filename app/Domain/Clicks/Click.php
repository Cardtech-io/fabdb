<?php
namespace FabDB\Domain\Clicks;

use FabDB\Library\Model;

class Click extends Model
{
    protected $fillable = ['clickableId', 'clickableType', 'url', 'ipAddress'];

    public function clickable()
    {
        return $this->morphTo(__FUNCTION__, 'clickable_type', 'clickable_id');
    }

    public static function register($clickableId, $clickableType, $url, $ipAddress, $from, $fromType)
    {
        return static::create(compact('clickableId', 'clickableType', 'url', 'ipAddress', 'from', 'fromType'));
    }
}
