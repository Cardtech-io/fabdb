<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class DeckResource extends JsonResource
{
    use HasImage;

    public function toArray($request)
    {
        $response = Arr::except($this->resource->toArray(), [
            'decksheet',
            'decksheetCreatedAt',
            'parentId',
            'pivot'
        ]);

        $response['cardBackImage'] = $this->cardBackImage($this->resource->cardBack);
        $response['practise'] = $this->when($this->resource->practiseId, new PractiseResource($this->resource->practise));
        $response['cards'] = CardResource::collection($this->whenLoaded('cards'));
        $response['weapons'] = CardResource::collection($this->whenLoaded('weapons'));
        $response['hero'] = new CardResource($this->whenLoaded('hero'));
        $response['parent'] = new DeckResource($this->whenLoaded('parent'));
        $response['sideboard'] = SideboardResource::collection($this->whenLoaded('sideboard'));
        $response['mine'] = $this->resource->userId === object_get(auth()->user(), 'id');

        return $response;
    }
}
