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
            'pivot',
            'updatedAt'
        ]);

        $response['practise'] = $this->when($this->resource->practiseId, new PractiseResource($this->resource->practise));
        $response['cards'] = CardResource::collection($this->resource->cards);
        $response['sideboard'] = SideboardResource::collection($this->resource->sideboard);

        return $response;
    }
}
