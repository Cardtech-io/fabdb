<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProfileRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => ['required', Rule::unique('users')->ignore($this->user()->id)],
            'name' => ['nullable', 'alpha_spaces'],
            'gemId' => ['nullable', 'numeric'],
            'width' => ['required', 'in:narrow,wide'],
            'oldPassword' => ['password'],
            'newPassword' => ['required_with:oldPassword', 'confirmed', 'min:8', 'regex:/[\!\?><,.]+/i'],
        ];
    }
}
