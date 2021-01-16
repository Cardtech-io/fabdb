<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class OwnedCardResource extends JsonResource
{
    public function toArray($request)
    {
        $response = Arr::only($this->resource->toArray(), ['printingId', 'total', 'trade', 'want']);

        return $response;
    }
}
