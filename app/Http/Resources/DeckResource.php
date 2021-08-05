<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class DeckResource extends JsonResource
{
    public function toArray($request)
    {
        $response = Arr::except($this->resource->toArray(), [
            'decksheet',
            'decksheetCreatedAt',
            'parentId',
            'pivot'
        ]);

        $response['practise'] = $this->when($this->resource->practiseId, new PractiseResource($this->resource->practise));
        $response['cards'] = CardResource::collection($this->resource->cards);
        $response['parent'] = $this->whenLoaded('parent', new DeckResource($this->resource->parent));
        $response['sideboard'] = SideboardResource::collection($this->resource->sideboard);
        $response['mine'] = $this->resource->userId === object_get(auth()->user(), 'id');

        return $response;
    }
}
