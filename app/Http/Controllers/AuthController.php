<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Users\AuthenticateUser;
use FabDB\Domain\Users\AuthObserver;
use FabDB\Domain\Users\ValidateAuthenticationCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        $this->dispatchNow(new AuthenticateUser($observer = new AuthObserver, $request->get('email')));

        return ['registered' => $observer->result()];
    }

    public function validateCode(Request $request)
    {
        $this->dispatchNow(new ValidateAuthenticationCode(
            $observer = new AuthObserver,
            $request->get('email'),
            $request->get('code')
        ));

        return ['user' => $observer->user()];
    }

    public function logout()
    {
        Auth::logout();
    }
}
