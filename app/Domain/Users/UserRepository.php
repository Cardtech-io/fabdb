<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Repository;

interface UserRepository extends Repository
{
    public function findByEmail(string $email);

    public function findByEmailAndToken(string $email, string $code): User;

    public function view(string $slug, array $relations = []);

    /**
     * Generates a new api key for the user, returning an array that contains:
     *
     * - token
     * - secret
     *
     * @return array
     */
    public function generateApiKey(int $userId): array;

    public function findByApiToken(string $token);
}
