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
        info('Game result request user: ['.$user->id.']');
        info('Game result request time: ['.$request->get('time').']');
        info('Game result request hash: ['.$request->get('hash').']');
        info('Game result request token: ['.$request->header('Authorization').']');
        $hash = hash('sha512', $user->apiSecret.$request->get('time'));

        if ($hash === $request->get('hash')) {
            return $next($request);
        }

        return response()->json('Unauthorised', 403);
    }
}
