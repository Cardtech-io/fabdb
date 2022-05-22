<?php
namespace FabDB\Http\Middleware;

use Closure;
use Illuminate\Encryption\Encrypter;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

/**
 * The infrastructure authentication middleware is very simple. It uses a shared key on our network to decrypt the auth
 * key. If that auth key does not match one of the supported projects, it will prevent access.
 */
class IntranetAuth
{
    const PROJECTS = [
        'rathetimes',
        'teklolabs'
    ];

    public function handle(Request $request, Closure $next)
    {
        $auth = $request->get('auth');

        if (!$auth) abort(403);

        $project = $this->decrypt($auth);

        if (!in_array($project, self::PROJECTS)) abort(403);

        return $next($request);
    }

    private function decrypt(string $value)
    {
        $key = base64_decode(Str::after(config('app.intra_key'), 'base64:'));
        $crypt = new Encrypter($key, config('app.cipher'));

        return $crypt->decrypt($value);
    }
}
