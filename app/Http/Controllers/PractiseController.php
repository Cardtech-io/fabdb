<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\Packs;
use FabDB\Domain\Cards\Set;
use FabDB\Domain\Practise\Format;
use FabDB\Domain\Practise\PractiseRepository;
use FabDB\Domain\Practise\SetupObserver;
use FabDB\Domain\Practise\SetupPractise;
use FabDB\Http\Requests\OpenPackRequest;
use FabDB\Http\Resources\CardResource;
use Illuminate\Http\Request;

class PractiseController extends Controller
{
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

    public function openPack(OpenPackRequest $request, Packs $packs, PractiseRepository $practises)
    {
        $practise = $practises->bySlug($request->get('slug'));

        $this->dispatchNow(new GeneratePack($practise->id));

        return CardResource::collection($packs->generate(new Set($request->get('set'))));
    }
}
