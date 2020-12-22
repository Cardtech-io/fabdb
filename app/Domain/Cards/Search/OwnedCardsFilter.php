<?php
namespace FabDB\Domain\Cards\Search;

use FabDB\Domain\Users\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class OwnedCardsFilter implements SearchFilter
{
    /**
     * @var User
     */
    private $user;

    public function __construct(?User $user)
    {
        $this->user = $user;
    }

    public function applies(array $input)
    {
        return (bool) $this->user && Arr::get($input, 'use-case') === 'collection';
    }

    public function applyTo(Builder $query, array $input)
    {
        $query->with(['ownedCards' => function($query) {
            $query->whereNotNull('printing_id');
            $query->where('user_id', $this->user->id);
        }]);
    }
}
