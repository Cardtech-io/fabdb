<?php
namespace FabDB\Domain\Users;

interface UserRepository
{
    public function findByEmail(string $email);

    public function save(User $user);

    public function findByEmailAndCode(string $email, string $code): User;
}
