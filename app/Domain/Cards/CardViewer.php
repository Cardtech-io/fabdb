<?php
namespace FabDB\Domain\Cards;

class CardViewer
{
    /**
     * Retrieves a new identifier based on the current identifer for next/previous navigation when viewing cards.
     *
     * @param string $identifier
     * @param string $operator
     * @return string
     */
    public function newIdentifier($identifier, $operator)
    {
        $parts = str_split($identifier, 3);
        $set = $parts[0];

        switch ($operator) {
            case '+':
                $identifier = str_pad($parts[1] + 1, 3, 0, STR_PAD_LEFT);

                if ($identifier > $this->setMax($set)) {
                    $identifier = $set.$this->cards()->getFirstIdentifier($set);
                } else {
                    $identifier = $set.$identifier;
                }

                break;
            case '-':
                $identifier = str_pad($parts[1] - 1, 3, 0, STR_PAD_LEFT);

                if ($identifier < $this->cards()->getFirstIdentifier($set)) {
                    $identifier = $set.$this->setMax($set);
                } else {
                    $identifier = $set.$identifier;
                }

                break;
        }

        return $identifier;
    }

    private function cards()
    {
        return app(CardRepository::class);
    }

    private function setMax(string $set)
    {
        $set = strtolower($set);

        return config("cards.set_max_ids.$set");
    }
}
