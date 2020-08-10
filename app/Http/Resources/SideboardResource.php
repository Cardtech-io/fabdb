<?php

namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class SideboardResource extends JsonResource
{
    public function toArray($request)
    {
        $response = Arr::except($this->resource->toArray(), [
            'pivot'
        ]);

        $response['total'] = $this->whenPivotLoaded('sideboard', function () {
            return $this->pivot->total;
        });

        return $response;
    }
}
