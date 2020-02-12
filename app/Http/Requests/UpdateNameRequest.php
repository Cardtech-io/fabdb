<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateNameRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => ['required', 'alpha_spaces'],
        ];
    }
}