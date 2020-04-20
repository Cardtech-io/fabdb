<?php
namespace FabDB\Http\Requests;

use FabDB\Domain\Decks\Validation\AvailableToSideboard;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class AddCardToSideboardRequest extends FormRequest
{
    public function authorize()
    {
        return Auth::user()->id === $this->deck->userId;
    }

    public function rules()
    {
        return [
            'card' => [
                'required',
                new AvailableToSideboard($this->deck)
            ]
        ];
    }
}
