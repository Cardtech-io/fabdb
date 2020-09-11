<?php
namespace FabDB\Http\Requests;

use FabDB\Domain\Decks\Validation\HasHero;
use Illuminate\Foundation\Http\FormRequest;

class SetDeckCardTotalRequest extends FormRequest
{
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
