<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArticleRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->id == $this->article->userId;
    }

    public function rules()
    {
        return [
            'title' => 'required',
            'excerpt' => 'required',
            'content' => 'required',
        ];
    }
}
