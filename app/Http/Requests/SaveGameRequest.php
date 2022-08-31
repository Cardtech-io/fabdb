<?php

namespace FabDB\Http\Requests;

use FabDB\Domain\Cards\CardRepository;
use Illuminate\Foundation\Http\FormRequest;

class SaveGameRequest extends FormRequest
{
    public function opposingHeroId(): int
    {
        return app(CardRepository::class)->findByIdentifier($this->get('opposingHero'));
    }
}
