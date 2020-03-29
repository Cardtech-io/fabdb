<?php
namespace FabDB\Domain\Cards;

use FabDB\Domain\Users\User;
use Illuminate\Database\Eloquent\Collection;

interface CardRepository
{
    public function search(string $useCase, array $keywords, $class, $type, $set, $view = 'all', User $user = null);

    public function findByIdentifier(string $identifier, int $userId = null);

    /**
     * View a specific card, and retrieve the previous/next card ids, as well.
     *
     * @param string $identifier
     * @return Card
     */
    public function view(string $identifier): Card;

    /**
     * Returns the first available identifier for a card set.
     *
     * @param string $set
     * @return string
     */
    public function getFirstIdentifier(string $set): string;
}
