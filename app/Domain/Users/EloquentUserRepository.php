<?php
namespace FabDB\Domain\Users;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Ramsey\Uuid\Uuid;

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
            ->orWhere(function($query) use ($slug) {
                $query->whereVanitySlug($slug);
                $query->whereIn('subscription', ['legendary', 'fabled']);
            })
            ->first();
    }

    public function generateApiKey(int $userId): array
    {
        $user = $this->find($userId);

        $token = hash('sha256', Uuid::uuid4());
        $secret = hash('sha256', Uuid::uuid4());

        $user->setApiKey($token, $secret);
        $user->save();

        return compact('token', 'secret');
    }

    public function findByApiToken(string $token)
    {
        return $this->newQuery()
            ->whereApiToken($token)
            ->first();
    }
}
