<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class PrintingResource extends JsonResource
{
    public function toArray($request)
    {
        return Arr::only($this->resource->toArray(), ['id', 'sku', 'set', 'edition']);
    }
}
