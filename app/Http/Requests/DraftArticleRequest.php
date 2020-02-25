<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class DraftArticleRequest extends FormRequest
{
    public function authorize()
    {
        return Auth::check();
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
