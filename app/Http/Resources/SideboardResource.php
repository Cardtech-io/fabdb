<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class SideboardResource extends CardResource
{
    public function toArray($request)
    {
        $response = Arr::except($this->resource->toArray(), [
            'pivot'
        ]);

        $response['image'] = $this->defaultImage($this->resource->image);

        $response['total'] = $this->whenPivotLoaded('sideboard', function () {
            return $this->pivot->total;
        });

        return $response;
    }
}
