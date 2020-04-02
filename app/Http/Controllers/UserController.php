<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Users\UpdateName;
use FabDB\Domain\Users\UpdateProfile;
use FabDB\Http\Requests\UpdateNameRequest;
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
            $request->get('need'),
            $request->get('view'),
            $request->get('avatar', 'bauble')
        ));
    }

    public function updateName(UpdateNameRequest $request)
    {
        $this->dispatchNow(new UpdateName(
            $request->user()->id,
            $request->get('name')
        ));
    }
}