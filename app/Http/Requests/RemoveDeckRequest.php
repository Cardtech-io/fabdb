<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class RemoveDeckRequest extends FormRequest
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
