<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class ArtistResource extends JsonResource
{
    use HasImage;

    public function toArray($request)
    {
        $response = Arr::only($this->resource->toArray(), ['name', 'blurb', 'image']);

        $response['slug'] = (string) $this->resource->slug;
        $response['cards'] = CardResource::collection($this->whenLoaded('cards'));

        if ($this->resource->image) {
            $response['image'] = $this->defaultImage($this->resource->image);
        }

        return $response;
    }
}
