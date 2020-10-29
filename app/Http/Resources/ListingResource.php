<?php
namespace FabDB\Http\Resources;

use FabDB\Domain\Cards\Card;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class ListingResource extends JsonResource
{
    public function toArray($request)
    {
        $response = Arr::only($this->resource->toArray(), ['name', 'currency', 'price', 'path', 'domain']);

        return $response;
    }
}
