<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Users\CompleteProfile;
use FabDB\Domain\Users\UpdateName;
use FabDB\Domain\Users\UpdateProfile;
use FabDB\Domain\Users\UserRepository;
use FabDB\Http\Requests\CompleteProfileRequest;
use FabDB\Http\Requests\UpdateNameRequest;
use FabDB\Http\Requests\UpdateProfileRequest;
use FabDB\Http\Resources\UserResource;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function updateProfile(UpdateProfileRequest $request)
    {
        $this->dispatchNow(new UpdateProfile(
            $request->user()->id,
            $request->get('email'),
            $request->get('newPassword'),
            $request->get('name'),
            $request->get('gemId'),
            $request->get('currency'),
            $request->get('need'),
            $request->get('avatar', 'bauble'),
            $request->get('theme'),
            $request->get('width')
        ));
    }

    public function completeProfile(CompleteProfileRequest $request)
    {
        $this->dispatchNow(new CompleteProfile(
            $request->user()->id,
            $request->get('name'),
            $request->get('gemId')
        ));
    }

    public function updateName(UpdateNameRequest $request)
    {
        $this->dispatchNow(new UpdateName(
            $request->user()->id,
            $request->get('name')
        ));
    }

    public function view(Request $request, UserRepository $users)
    {
        return new UserResource($users->view($request->user));
    }
}
