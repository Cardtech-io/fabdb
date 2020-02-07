<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Users\UpdateProfile;
use FabDB\Http\Requests\UpdateProfileRequest;

class UserController extends Controller
{
    public function updateProfile(UpdateProfileRequest $request)
    {
        $this->dispatchNow(new UpdateProfile(
            $request->user()->id,
            $request->get('email'),
            $request->get('name'),
            $request->get('gemId'),
            $request->get('need')
        ));
    }
}