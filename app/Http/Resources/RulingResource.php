<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class RulingResource extends JsonResource
{
    public function toArray($request)
    {
        return Arr::except($this->resource->toArray(), ['id', 'pivot']);
    }
}
