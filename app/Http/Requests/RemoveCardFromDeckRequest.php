<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class RemoveCardFromDeckRequest extends FormRequest
{
    public function authorize()
    {
        return Auth::user()->id === $this->deck->user_id;
    }

    public function rules()
    {
        return [];
    }
}
