<?php
namespace FabDB\Domain\Users;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;

class EloquentUserRepository extends EloquentRepository implements UserRepository
{
    protected function model(): Model
    {
        return new User;
    }

    public function findByEmail(string $email)
    {
        return $this->newQuery()
            ->whereEmail($email)
            ->first();
    }

    public function findByEmailAndToken(string $email, string $code): User
    {
        return $this->newQuery()
            ->whereEmail($email)
            ->whereToken($code)
            ->firstOrFail();
    }

    public function view(string $slug, array $relations = [])
    {
        return $this->newQuery()
            ->with($relations)
            ->select('id', 'slug', 'name', 'avatar')
            ->whereSlug($slug)
            ->first();
    }
}
