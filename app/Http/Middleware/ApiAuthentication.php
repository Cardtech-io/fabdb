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

//{"gameId":294,"gameName":"747","deckId":"jWdmYwrB","turns":4,"result":1,"firstPlayer":1,"opposingHero":"UPR044","cardResults":[{"cardId":"ARC200","played":"0","blocked":"0","pitched":"1"},{"cardId":"CRU054","played":0,"blocked":0,"pitched":0},{"cardId":"CRU058","played":"0","blocked":"0","pitched":"1"},{"cardId":"CRU059","played":0,"blocked":0,"pitched":0},{"cardId":"CRU061","played":"1","blocked":"0","pitched":"0"},{"cardId":"CRU062","played":"0","blocked":"0","pitched":"1"},{"cardId":"CRU066","played":"2","blocked":"0","pitched":"0"},{"cardId":"CRU069","played":0,"blocked":0,"pitched":0},{"cardId":"EVR038","played":"1","blocked":"0","pitched":"0"},{"cardId":"MON262","played":"0","blocked":"0","pitched":"1"},{"cardId":"UPR081","played":"2","blocked":"0","pitched":"0"},{"cardId":"UPR093","played":"2","blocked":"0","pitched":"0"},{"cardId":"UPR098","played":0,"blocked":0,"pitched":0},{"cardId":"UPR101","played":"2","blocked":"0","pitched":"0"},{"cardId":"WTR085","played":0,"blocked":0,"pitched":0},{"cardId":"WTR086","played":0,"blocked":0,"pitched":0},{"cardId":"WTR088","played":"1","blocked":"0","pitched":"0"},{"cardId":"WTR092","played":0,"blocked":0,"pitched":0},{"cardId":"WTR093","played":"0","blocked":"0","pitched":"1"},{"cardId":"WTR094","played":0,"blocked":0,"pitched":0},{"cardId":"WTR106","played":"0","blocked":"0","pitched":"1"},{"cardId":"WTR112","played":"0","blocked":"0","pitched":"1"},{"cardId":"WTR169","played":0,"blocked":0,"pitched":0},{"cardId":"WTR215","played":0,"blocked":0,"pitched":0}]}
