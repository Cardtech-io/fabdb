<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class PractiseResource extends JsonResource
{
    public function toArray($request)
    {
        $resource = Arr::only($this->resource->toArray(), ['slug', 'set', 'format', 'createdAt', 'packs']);

        $resource['packs'] = PacksResource::collection($this->resource->packs);

        return $resource;
    }
}
