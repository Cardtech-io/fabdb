<?php
namespace FabDB\Http\Resources;

use FabDB\Domain\Cards\Sku;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class CardResource extends JsonResource
{
    public function toArray($request)
    {
        $this->resource->setAppends([]);

        $response = Arr::only($this->resource->toArray(), ['identifier', 'name', 'text', 'comments', 'rarity', 'flavour', 'stats', 'keywords', 'next', 'prev']);

        if (object_get($this->resource, 'sku')) {
            $response['sku'] = new Sku($this->resource->sku);
        }

        if (empty($response['stats'])) {
            $response['stats'] = null;
        }

        $response['ad'] = new ListingResource($this->whenLoaded('ad'));
        $response['printings'] = PrintingResource::collection($this->whenLoaded('printings'));
        $response['listings'] = ListingResource::collection($this->whenLoaded('listings'));
        $response['rulings'] = $this->whenLoaded('rulings');
        $response['image'] = $this->image($this->resource);

        $this->polymorphicTotal($response, 'deck_cards');
        $this->polymorphicTotal($response, 'sideboard');

        return $response;
    }

    protected function image($card)
    {
        $domain = config('services.imgix.domain');

        return "https://$domain/{$card->image}?w=300&fit=clip&auto=compress";
    }

    private function polymorphicTotal(array &$response, string $table)
    {
        if ($this->resource->pivot && $this->resource->pivot->getTable() == $table) {
            $response['total'] = $this->whenPivotLoaded($table, function () {
                return $this->pivot->total;
            });
        }
    }
}
