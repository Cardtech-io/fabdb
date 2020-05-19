<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterEventRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->isStoreOwner() || $this->user()->isEditor();
    }

    public function rules()
    {
        return [
            'name' => ['required'],
            'type' => ['required'],
            'startsAt' => ['required'],
        ];
    }
}
