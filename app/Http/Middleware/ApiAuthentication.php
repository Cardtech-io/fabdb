<?php
namespace FabDB\Http\Middleware;

use FabDB\Domain\Users\UserRepository;

class ApiAuthentication
{
    private UserRepository $users;

    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }

    public function handle($request, \Closure $next)
    {
        $token = str_replace('Bearer ', '', $request->header('Authorization'));
        $user = $this->users->findByApiToken($token);

        $hash = hash('sha512', $user->apiSecret.$request->get('time'));

        if ($hash === $request->get('hash')) {
            return $next($request);
        }

        return response()->json('Unauthorised', 403);
    }
}
