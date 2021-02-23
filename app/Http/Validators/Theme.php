<?php
namespace FabDB\Http\Validators;

use Illuminate\Contracts\Validation\Rule;

class Theme implements Rule
{
    public function passes($attribute, $value)
    {
        return $value !== 'battle' || auth()->user()->patron();
    }

    public function message()
    {
        return trans('validation.theme.patrons_only');
    }
}
