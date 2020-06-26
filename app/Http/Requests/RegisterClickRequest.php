<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterClickRequest extends FormRequest
{
    public function rules()
    {
        return [
            'to' => 'required'
        ];
    }
}
