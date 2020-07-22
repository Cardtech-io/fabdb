<?php
namespace FabDB\Domain\Voting;

use FabDB\Providers\AppServiceProvider;

class VotingServiceProvider extends AppServiceProvider
{
    protected $interfaces = [
        VoteRepository::class => EloquentVoteRepository::class,
    ];
}
