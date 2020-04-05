<?php
namespace FabDB\Http\Requests;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\Validation\HasHero;
use FabDB\Domain\Decks\Validation\MatchesKeywords;
use FabDB\Domain\Decks\Validation\MaxCards;
use FabDB\Domain\Decks\Validation\SupportsWeapon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class AddCardToDeckRequest extends FormRequest
{
    public function authorize()
    {
        return Auth::user()->id === $this->deck->user_id;
    }

    public function rules()
    {
        return [
            'card' => [
                new HasHero($this->deck),
                new MatchesKeywords($this->deck),
                new SupportsWeapon($this->deck),
                new MaxCards($this->deck)
            ]
        ];
    }
}
