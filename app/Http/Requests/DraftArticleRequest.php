<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DraftArticleRequest extends FormRequest
{
    public function rules()
    {
        return [
            'title' => 'required',
            'excerpt' => 'required',
            'content' => 'required',
        ];
    }
}
