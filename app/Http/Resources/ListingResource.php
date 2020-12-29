<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class ListingResource extends JsonResource
{
    public function toArray($request)
    {
        $response = Arr::only($this->resource->toArray(), [
            'id',
            'name',
            'currency',
            'price',
            'path',
            'domain',
            'store',
            'variant'
        ]);
        $response['store'] = new StoreResource($this->whenLoaded('store'));

        return $response;
    }
}
