<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Users\CheckEmail;
use FabDB\Domain\Users\AuthObserver;
use FabDB\Domain\Users\GenerateApiKey;
use FabDB\Domain\Users\RegisterUser;
use FabDB\Domain\Users\UserRepository;
use FabDB\Domain\Users\ValidateAuthenticationCode;
use FabDB\Http\Observers\KeyGeneratorObserver;
use FabDB\Http\Requests\AuthenticationRequest;
use FabDB\Http\Requests\RegistrationRequest;
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

    public function register(RegistrationRequest $request)
    {
        $this->dispatchNow(new RegisterUser($observer = new AuthObserver, $request->get('email')));

        return ['status' => $observer->status()];
    }

    public function validatePassword(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return ['user' => Auth::user()];
        }

        return response()->json([
            'error' => 'The provided credentials do not match our records.',
        ], 422);
    }

    public function logout()
    {
        Auth::logout();
    }

    public function generateApiKey(Request $request, UserRepository $users)
    {
        return $users->generateApiKey($request->user()->id);
    }
}
