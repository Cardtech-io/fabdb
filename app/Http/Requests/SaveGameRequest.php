<?php

namespace FabDB\Http\Requests;

use FabDB\Domain\Cards\CardRepository;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;

class SaveGameRequest extends FormRequest
{
    public function rules()
    {
        return [];
    }

    public function opposingHeroId(): int
    {
        return app(CardRepository::class)->getFirstByNumber($this->get('opposingHero'))?->id;
    }
}
