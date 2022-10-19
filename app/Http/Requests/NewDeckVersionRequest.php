<?php

namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewDeckVersionRequest extends FormRequest
{
    public function authorize()
    {
        return $this->deck->userId = $this->user()->id;
    }

    public function rules()
    {
        return [];
    }
}
