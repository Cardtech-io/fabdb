<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Cards\Card;
use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Str;

class MatchesKeywords implements Rule
{
    use RequiresCard;

    /**
     * @var Deck
     */
    public $deck;

    /**
     * @var string
     */
    private $mainKeyword;

    public function __construct(Deck $deck)
    {
        $this->deck = $deck;
        $this->mainKeyword = $deck->mainKeyword();
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
        $card = $this->getCard($value);

        return $card->isHero() || count(array_intersect($card->keywords, [$this->mainKeyword, 'generic'])) >= 1 || $this->shapeshifting($card);
    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        return 'Card must contain keywords \''.$this->mainKeyword.'\' or \'generic\'.';
    }

    private function shapeshifting(Card $card)
    {
        return $this->deck->hero()->keywords[0] == 'shapeshifter' && Str::contains(strtolower($card->text), 'specialization');
    }
}
