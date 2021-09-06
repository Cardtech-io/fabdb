<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class ArtistResource extends JsonResource
{
    use HasImage;

    public function toArray($request)
    {
        return Arr::only($this->resource->toArray(), ['name', 'slug', 'blurb', 'image']);
    }
}
