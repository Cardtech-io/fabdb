<?php
namespace FabDB\Domain\Decks\Validation;

use FabDB\Domain\Decks\Deck;
use Illuminate\Contracts\Validation\Rule;

class SupportsWeapon implements Rule
{
    use RequiresCard;

    /**
     * @var Deck
     */
    private $deck;

    public function __construct(Deck $deck)
    {
        $this->deck = $deck;
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

        return !$card->isWeapon() ||
            $this->deck->weapons()->isEmpty() ||
            ($this->deck->weapons()->first()->oneHanded() && in_array('1h', $card->keywords) && $this->deck->weapons()->sum('total') < 2);
    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        return 'You already have weapons equipped.';
    }
}