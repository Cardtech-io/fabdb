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

        // e8f8f0f0d2e697f1aa1e2b2c006e020d82f54eef9219f16e4150f503b4504a41
        $query = $this->query($request);

        $hash = hash('sha256', $user->apiSecret.$query);

        if ($hash === $request->get('hash')) {
            return $next($request);
        }

        return response()->json('Unauthorised', 403);
    }

    private function query($request)
    {
        $params = $request->except('hash');
        
        ksort($params);

        return http_build_query($params);
    }
}
