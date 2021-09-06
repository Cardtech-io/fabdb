<?php
namespace FabDB\Http\Resources;

use FabDB\Domain\Cards\Sku;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class CardResource extends JsonResource
{
    use HasImage;

    public function toArray($request)
    {
        $this->resource->setAppends(['banned']);

        $response = Arr::only($this->resource->toArray(), ['identifier', 'name', 'text', 'comments', 'rarity', 'flavour', 'stats', 'keywords', 'banned', 'next', 'prev', 'available', 'class', 'type', 'subType', 'talent']);

        if (object_get($this->resource, 'sku')) {
            $response['sku'] = new Sku($this->resource->sku);
        }

        $response['image'] = $this->alteredImage($this->resource, $request);

        if (object_get($this->resource, 'totalOwned')) {
            $response['totalOwned'] = (int) $this->resource->totalOwned;
        }

        $response['totalSideboard'] = object_get($this, 'resource.totalSideboard', 0);

        $response['ad'] = new ListingResource($this->whenLoaded('ad'));
        $response['artist'] = new ArtistResource($this->whenLoaded('artist'));
        $response['printings'] = PrintingResource::collection($this->whenLoaded('printings'));
        $response['listings'] = ListingResource::collection($this->whenLoaded('listings'));
        $response['rulings'] = $this->whenLoaded('rulings');

        $this->polymorphicTotal($response, 'deck_cards', ['total']);
        $this->polymorphicTotal($response, 'sideboard', ['total']);

        return $response;
    }

    private function polymorphicTotal(array &$response, string $table, array $fields)
    {
        if ($this->resource->pivot && $this->resource->pivot->getTable() == $table) {
            foreach ($fields as $field) {
                $response[$field] = $this->whenPivotLoaded($table, function() use ($field) {
                    return $this->pivot->$field;
                });
            }
        }
    }
}
