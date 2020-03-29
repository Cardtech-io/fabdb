<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CancelEventRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->isEditor() || $this->user()->id == $this->event->userId;
    }

    public function rules()
    {
        return [];
    }
}
