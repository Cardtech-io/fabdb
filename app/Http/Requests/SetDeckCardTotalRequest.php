<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SetDeckCardTotalRequest extends FormRequest
{
    public function authorize()
    {
        return auth()->user()->id === $this->deck->userId;
    }
}
