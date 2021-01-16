<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        $this->resource->setAppends([]);

        $response = Arr::only($this->resource->toArray(), ['slug', 'name', 'avatar']);

        $response['owned_cards'] = PrintingResource::collection($this->whenLoaded('printings'));

        return $response;
    }
}
