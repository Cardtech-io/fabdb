<?php

namespace FabDB\Domain\Games;

use FabDB\Library\Model;

class GameCard extends Model
{
    protected $fillable = [
        'cardId',
        'pitched',
        'played',
        'blocked',
    ];

    public $timestamps = false;

    public static function booted()
    {
        self::creating(function($model) {
            $model->seen = $model->played + $model->pitched + $model->blocked;
        });
    }
}
