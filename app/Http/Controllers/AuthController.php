<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Users\AuthenticateUser;
use FabDB\Domain\Users\AuthObserver;
use FabDB\Domain\Users\ValidateAuthenticationCode;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        $this->dispatchNow(new AuthenticateUser($request->get('email'), $observer = new AuthObserver));

        return ['registered' => $observer->result()];
    }

    public function validateCode(Request $request)
    {
        $this->dispatchNow(new ValidateAuthenticationCode($request->get('email'), $request->get('code')));
    }
}
