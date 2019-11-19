<?php
namespace FabDB\Domain\Users;

use FabDB\Providers\AppServiceProvider;

class UsersServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        UserRepository::class => EloquentUserRepository::class,
    ];
}
