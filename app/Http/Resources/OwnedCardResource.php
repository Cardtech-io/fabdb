<?php
namespace FabDB\Http\Resources;

use FabDB\Domain\Cards\Sku;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class OwnedCardResource extends JsonResource
{
    use HasImage;

    public function toArray($request)
    {
        $response = Arr::only($this->resource->toArray(), ['printingId', 'total', 'trade', 'want']);

        $response['banned'] = $this->when($this->resource->banned, true);
        $response['identifier'] = $this->when($this->resource->identifier, $this->resource->identifier);
        $response['name'] = $this->when($this->resource->name, $this->resource->name);
        $response['sku'] = $this->when($this->resource->sku, function() {
            return new Sku($this->resource->sku);
        });
        $response['image'] = $this->defaultImage($this->resource);

        return $response;
    }
}
