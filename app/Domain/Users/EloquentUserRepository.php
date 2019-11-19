<?php
namespace FabDB\Domain\Users;

use FabDB\Library\EloquentRepository;
use Illuminate\Database\Eloquent\Model;

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

    public function save(User $user)
    {
        if ($user->isDirty()) {
            $user->save();
        }
    }
}
