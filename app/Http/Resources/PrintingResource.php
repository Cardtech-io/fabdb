<?php
namespace FabDB\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class PrintingResource extends JsonResource
{
    use HasImage;

    public function toArray($request)
    {
        $response = Arr::only($this->resource->toArray(), ['id', 'sku', 'set', 'language', 'edition', 'rarity', 'name', 'flavour', 'text', 'total', 'trade', 'want']);

        if (Arr::has($response, 'total')) {
            $response['total'] = (int) $response['total'];
        }

        if (Arr::has($response, 'trade')) {
            $response['trade'] = (bool) $response['trade'];
        }

        if (Arr::has($response, 'want')) {
            $response['want'] = (bool) $response['want'];
        }

        $response['card'] = new CardResource($this->whenLoaded('card'));
        $response['image'] = $this->printingImage($this->resource->sku->raw());

        return $response;
    }

    private function image()
    {

    }
}
