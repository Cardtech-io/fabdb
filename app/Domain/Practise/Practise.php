<?php
namespace FabDB\Domain\Practise;

use FabDB\Domain\Cards\Set;
use FabDB\Library\Casts\CastsFormat;
use FabDB\Library\Casts\CastsSet;
use FabDB\Library\Model;
use FabDB\Library\Sluggable;

class Practise extends Model
{
    use Sluggable;

    protected $fillable = ['userId', 'format', 'set'];

    protected $casts = [
        'format' => CastsFormat::class,
        'set' => CastsSet::class
    ];

    public static function setup(int $userId, Format $format, Set $set)
    {
        return new Practise(compact('userId', 'format', 'set'));
    }
}
