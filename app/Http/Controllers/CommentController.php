<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Comments\PostComment;
use FabDB\Domain\Comments\PostCommentObserver;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function post(Request $request)
    {
        $this->dispatchNow(new PostComment(
            $observer = new PostCommentObserver,
            $request->user()->id,
            $request->get('type'),
            $request->get('foreign'),
            $request->get('content')
        ));

        return $observer->comment();
    }
}
