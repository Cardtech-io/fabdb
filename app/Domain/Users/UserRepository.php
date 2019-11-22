<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Repository;

interface UserRepository extends Repository
{
    public function findByEmail(string $email);

    public function findByEmailAndToken(string $email, string $code): User;
}
