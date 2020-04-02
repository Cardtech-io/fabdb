<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompleteProfileRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => ['required', 'alpha_spaces'],
            'gemId' => ['required', 'numeric']
        ];
    }
}
