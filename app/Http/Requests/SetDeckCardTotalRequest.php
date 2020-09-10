<?php
namespace FabDB\Http\Requests;

use FabDB\Domain\Decks\Validation\HasHero;
use FabDB\Domain\Decks\Validation\RequiresCard;
use Illuminate\Foundation\Http\FormRequest;

class SetDeckCardTotalRequest extends FormRequest
{
    use RequiresCard;

    public function authorize()
    {
        return auth()->user()->id === $this->deck->userId;
    }

    public function rules()
    {
        return [
            new HasHero($this->deck)
        ];
    }
}
