<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Users\CheckEmail;
use FabDB\Domain\Users\AuthObserver;
use FabDB\Domain\Users\ValidateAuthenticationCode;
use FabDB\Http\Requests\AuthenticationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function checkEmail(AuthenticationRequest $request)
    {
        $this->dispatchNow(new CheckEmail($observer = new AuthObserver, $request->get('email')));

        return ['status' => $observer->status()];
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
