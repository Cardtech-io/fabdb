<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthenticationRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => ['required', 'email:rfc,dns']
        ];
    }
}
