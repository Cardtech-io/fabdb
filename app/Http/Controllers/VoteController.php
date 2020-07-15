<?php
namespace FabDB\Http\Controllers;

class VoteController extends Controller
{
    public function vote(VoteRequest $request)
    {
        $this->dispatchNow(new LodgeVote(
            $observer = new LodgeVote,
            $request->get('type'),
            $request->get('foreign'),
            $request->get('direction')
        ));
    }
}
