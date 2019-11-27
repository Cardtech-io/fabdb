<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;

class MatchesKeywords implements Rule
{
    /**
     * @var string
     */
    private $mainKeyword;

    /**
     * @var Card
     */
    private $card;

    public function __construct(Deck $deck, Card $card)
    {
        $this->mainKeyword = $deck->hero()->keywords[1];
        $this->card = $card;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string $attribute
     * @param  mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return count(array_intersect($this->card->keywords, [$this->mainKeyword, 'generic'])) >= 1;
    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        return 'Your chosen card is not allowed in your deck (does not contain keywords \''.$this->mainKeyword.'\' or \'generic\'.';
    }
}