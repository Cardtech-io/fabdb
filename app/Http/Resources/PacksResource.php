<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PacksResource extends JsonResource
{
    public function toArray($request)
    {
        return CardResource::collection($this->resource->cards);
    }
}
