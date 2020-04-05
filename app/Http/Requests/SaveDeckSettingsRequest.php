<?php
namespace FabDB\Http\Requests;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\Validation\HasHero;
use FabDB\Domain\Decks\Validation\MatchesKeywords;
use FabDB\Domain\Decks\Validation\MaxCards;
use FabDB\Domain\Decks\Validation\SupportsWeapon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class SaveDeckSettingsRequest extends FormRequest
{
    public function authorize()
    {
        return Auth::user()->id === $this->deck->userId;
    }

    public function rules()
    {
        return [
            'cardBack' => ['required', 'in:1,2,3,4'],
            'visibility' => ['required', 'in:private,public']
        ];
    }
}
