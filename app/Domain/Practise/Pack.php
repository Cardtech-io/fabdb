<?php
namespace FabDB\Domain\Practise;

use FabDB\Domain\Cards\Card;
use FabDB\Library\Model;
use FabDB\Library\Raiseable;

class Pack extends Model
{
    use Raiseable;

    public $timestamps = false;

    protected $casts = [
        'cards' => 'array'
    ];

    public function cards()
    {
        return $this->belongsToMany(Card::class);
    }

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->setCreatedAt($model->freshTimestamp());
        });
    }

    public static function forPractise(int $practiseId)
    {
        $pack = new self;
        $pack->practiseId = $practiseId;

        return $pack;
    }

    public function saveCards(array $cardIds)
    {
        $this->cards()->sync($cardIds);

        $this->raise(new PackWasGenerated($this->practiseId, $cardIds));
    }
}
