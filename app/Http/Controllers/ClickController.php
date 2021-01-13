<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Clicks\RegisterClick;
use FabDB\Domain\Stores\Listing;
use FabDB\Http\Requests\RegisterClickRequest;

class ClickController extends Controller
{
    public function register(RegisterClickRequest $request)
    {
        $to = json_decode(base64_decode($request->get('to')), true);

        $this->dispatchNow(new RegisterClick(
            $to['id'],
            Listing::class,
            $to['url'],
            $request->ip(),
            $to['from'],
            $to['fromType']
        ));

        return redirect($to['url']);
    }
}
