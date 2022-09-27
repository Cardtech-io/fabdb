<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CastVoteRequest extends FormRequest
{
    public function rules()
    {
        return [
            'foreign' => 'required',
            'type' => 'required'
        ];
    }
}
