<?php
namespace FabDB\Http\Requests;

use FabDB\Domain\Comments\Comment;
use FabDB\Domain\Comments\CommentableId;
use FabDB\Domain\Comments\CommentableType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PostCommentRequest extends FormRequest
{
    public function rules()
    {
        return [
            'content' => [
                'required',
                Rule::unique(Comment::class)->where(function($query) {
                    $query->whereCommentableType(CommentableType::fromRaw($this->get('type')));
                    $query->whereCommentableId($this->foreignId());
                    $query->whereUserId($this->user()->id);
                }),
            ]
        ];
    }

    private function foreignId()
    {
        $commentable = app(CommentableId::class);

        return $commentable->getId($this->get('type'), $this->get('foreign'));
    }
}
