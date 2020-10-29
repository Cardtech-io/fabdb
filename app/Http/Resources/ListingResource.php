<?php
namespace FabDB\Http\Resources;

use FabDB\Domain\Cards\Card;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class ListingResource extends JsonResource
{
    public function toArray($request)
    {
        return Arr::only($this->resource->toArray(), ['id', 'name', 'currency', 'price', 'path', 'domain']);
    }
}
