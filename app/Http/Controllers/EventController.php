<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Events\EventRegistrationObserver;
use FabDB\Domain\Events\EventRepository;
use FabDB\Domain\Events\EventType;
use FabDB\Domain\Events\RegisterEvent;
use FabDB\Domain\Events\ChangeEvent;
use FabDB\Http\Requests\RegisterEventRequest;
use FabDB\Http\Requests\UpdateEventRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class EventController extends Controller
{
    public function list(Request $request, EventRepository $events)
    {
        return $events->runBy($request->user()->id);
    }

    public function setup(RegisterEventRequest $request)
    {
        $this->dispatchNow(new RegisterEvent(
            $observer = new EventRegistrationObserver,
            $request->user()->id,
            $request->get('name'),
            new EventType($request->get('type')),
            new Carbon($request->get('startsAt'))
        ));

        return $observer->event();
    }

    public function view(Request $request)
    {
        return $request->event;
    }

    public function update(UpdateEventRequest $request)
    {
        $this->dispatchNow(new ChangeEvent(
            $request->event->slug,
            $request->get('name'),
            new EventType($request->get('type')),
            new Carbon($request->get('startsAt'))
        ));
    }
}
