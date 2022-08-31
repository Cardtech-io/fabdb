<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\Model;

class Correction extends Model
{
    protected $fillable = [
        'userId',
        'printingId',
        'name',
        'text',
        'comment'
    ];

    public static function suggest(int $userId, int $printingId, string $name, string $text, string $comment)
    {
        return Correction::create(compact('userId', 'printingId', 'name', 'text', 'comment'));
    }
}
