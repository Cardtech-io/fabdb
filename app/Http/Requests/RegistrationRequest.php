<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistrationRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => ['unique:users,email', 'required', 'email:rfc,dns', 'confirmed'],
        ];
    }
}
