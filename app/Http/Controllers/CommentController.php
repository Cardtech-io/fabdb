<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Comments\Commentable;
use FabDB\Domain\Comments\CommentableType;
use FabDB\Domain\Comments\CommentRepository;
use FabDB\Domain\Comments\PostComment;
use FabDB\Domain\Comments\PostCommentObserver;
use FabDB\Http\Requests\PostCommentRequest;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function post(PostCommentRequest $request)
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

    public function list(Request $request, CommentRepository $comments, Commentable $commentable)
    {
        $commentableType = CommentableType::fromRaw($request->type);

        $foreignId = $commentable->getId($request->type, $request->foreign);

        return $comments->get($commentableType, $foreignId, 10);
    }
}
