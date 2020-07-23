<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Voting\CastVote;
use FabDB\Domain\Voting\VoteableId;
use FabDB\Domain\Voting\VoteableType;
use FabDB\Http\Requests\CastVoteRequest;

class VoteController extends Controller
{
    public function cast(CastVoteRequest $request, VoteableId $voteable)
    {
        $type = VoteableType::fromRaw($request->get('type'));
        $foreignId = $voteable->getId($request->get('type'), $request->get('foreign'));

        $this->dispatchNow(new CastVote(
            $request->user()->id,
            $type,
            $foreignId,
            $request->get('direction')
        ));
    }
}
