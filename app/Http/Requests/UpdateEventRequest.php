<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEventRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->isEditor() || ($this->user()->id == $this->event->userId);
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
