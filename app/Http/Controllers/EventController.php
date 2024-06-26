<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Events\CancelEvent;
use FabDB\Domain\Events\EventRegistrationObserver;
use FabDB\Domain\Events\EventRepository;
use FabDB\Domain\Events\EventType;
use FabDB\Domain\Events\RegisterEvent;
use FabDB\Domain\Events\ChangeEvent;
use FabDB\Domain\Events\RegisterPlayer;
use FabDB\Domain\Events\SubmitDeck;
use FabDB\Domain\Events\UnregisterPlayer;
use FabDB\Http\Requests\CancelEventRequest;
use FabDB\Http\Requests\RegisterEventRequest;
use FabDB\Http\Requests\UpdateEventRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class EventController extends Controller
{
    public function list(Request $request, EventRepository $events)
    {
        return $events->involving($request->user()->id);
    }

    public function setup(RegisterEventRequest $request)
    {
        $this->dispatchNow(new RegisterEvent(
            $observer = new EventRegistrationObserver,
            $request->user()->id,
            $request->get('name'),
            $request->get('description'),
            new EventType($request->get('type')),
            (float) $request->get('fee'),
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
            $request->get('description'),
            new EventType($request->get('type')),
            (float) $request->get('fee'),
            new Carbon($request->get('startsAt'))
        ));
    }

    public function cancel(CancelEventRequest $request)
    {
        $this->dispatchNow(new CancelEvent(
            $request->event->slug
        ));
    }

    public function register(Request $request)
    {
        $this->dispatchNow(new RegisterPlayer(
            $request->event->id,
            $request->user()->id
        ));
    }

    public function unregister(Request $request)
    {
        $this->dispatchNow(new UnregisterPlayer(
            $request->event->id,
            $request->user()->id
        ));
    }

    public function submitDeck(Request $request)
    {
        $this->dispatchNow(new SubmitDeck(
            $request->event->id,
            $request->user()->id,
            $request->get('deck')
        ));
    }
}
