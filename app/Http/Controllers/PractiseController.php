<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Boosters\Box;
use FabDB\Domain\Cards\Boosters\Packs;
use FabDB\Domain\Cards\Set;
use FabDB\Domain\Practise\Format;
use FabDB\Domain\Practise\GeneratePack;
use FabDB\Domain\Practise\Practise;
use FabDB\Domain\Practise\PractiseRepository;
use FabDB\Domain\Practise\SavePack;
use FabDB\Domain\Practise\SetupObserver;
use FabDB\Domain\Practise\SetupPractise;
use FabDB\Http\Requests\OpenPackRequest;
use FabDB\Http\Resources\CardResource;
use FabDB\Http\Resources\PractiseResource;
use Illuminate\Http\Request;

class PractiseController extends Controller
{
    public function index(Request $request, PractiseRepository $practises)
    {
        return $practises->forUser($request->user()->id);
    }

    public function setup(Request $request)
    {
        $this->dispatchNow(new SetupPractise(
            $observer = new SetupObserver,
            $request->user()->id,
            new Format($request->get('format')),
            new Set($request->get('set')),
        ));

        return $observer->practise();
    }

    public function openPack(OpenPackRequest $request, Box $box, PractiseRepository $practises)
    {
        $practise = $practises->bySlug($request->get('practise'));

        $cards = $box->crackPack($practise->set);

        $this->dispatchNow(new SavePack($practise->id, $cards->pluck('id')->toArray()));

        return CardResource::collection($cards);
    }

    public function view(Practise $practise, PractiseRepository $practises)
    {
        return new PractiseResource($practise);
    }
}
