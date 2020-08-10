<?php
namespace FabDB\Domain\Cards;

use FabDB\Library\Model;

class Ruling extends Model
{
    protected $fillable = ['description', 'source'];
    protected $hidden = ['id'];

    public function cards()
    {
        return $this->belongsToMany(Card::class);
    }
}
