<?php
namespace FabDB\Http\Requests;

use FabDB\Domain\Decks\Validation\CardRarity;
use FabDB\Domain\Decks\Validation\HasHero;
use FabDB\Domain\Decks\Validation\MatchesKeywords;
use FabDB\Domain\Decks\Validation\MaxCards;
use FabDB\Domain\Decks\Validation\MaxTotalCards;
use FabDB\Domain\Decks\Validation\SupportsWeapon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class AddCardToDeckRequest extends FormRequest
{
    public function authorize()
    {
        return Auth::user()->id === $this->deck->userId;
    }

    public function rules()
    {
        $rules = [new HasHero($this->deck)];

        if ($this->deck->format == 'open') {
            return ['card' => $rules];
        }

        return [
            'card' => array_merge($rules, [
                new MatchesKeywords($this->deck),
                new MaxCards($this->deck),
                new CardRarity($this->deck),
                //new MaxTotalCards($this->deck),
            ])
        ];
    }
}
