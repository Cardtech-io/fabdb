<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class StoreResource extends JsonResource
{
    public function toArray($request)
    {
        $response = Arr::only($this->resource->toArray(), ['name', 'currency', 'domain']);

        return $response;
    }
}
