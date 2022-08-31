<?php

namespace FabDB\Domain\Games;

use FabDB\Library\Model;

class GameCard extends Model
{
    public static function booted()
    {
        self::creating(function($model) {
            $model->seen = $model->played + $model->pitched + $model->blocked;
        });
    }
}
