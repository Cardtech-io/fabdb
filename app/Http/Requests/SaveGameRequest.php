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

    public function payload(string $field = '')
    {
        $json = json_decode($this->getContent(), true);

        if (!$field) return $json;

        return Arr::get($json, $field);
    }
    
    public function opposingHeroId(): int
    {
        return app(CardRepository::class)->getFirstLikeSku($this->payload('opposingHero'))?->id;
    }
}
