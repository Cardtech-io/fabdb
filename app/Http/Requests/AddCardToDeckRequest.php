<?php
namespace FabDB\Http\Requests;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Decks\Validation\HasHero;
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
        $card = $this->getCard($this->request->get('card'));

        return [
            'card' => [
                new HasHero($this->deck, $card),
                new MatchesKeywords($this->deck, $card)
            ]
        ];
    }

    private function getCard($cardIdentifier)
    {
        return app(CardRepository::class)->find($cardIdentifier, $this->user()->id);
    }
}
