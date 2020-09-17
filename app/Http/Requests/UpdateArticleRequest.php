<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArticleRequest extends FormRequest
{
    public function authorize()
    {
        return $this->user()->id == $this->article->userId || $this->user()->isEditor();
    }

    public function rules()
    {
        return [
            'title' => 'required',
            'tags' => 'required',
            'excerpt' => 'required',
            'content' => 'required',
        ];
    }
}
