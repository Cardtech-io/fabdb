<?php
namespace FabDB\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserListsRequest extends FormRequest
{
    public function rules()
    {
        return [
            'view' => ['required', 'in:trade,want']
        ];
    }
}
