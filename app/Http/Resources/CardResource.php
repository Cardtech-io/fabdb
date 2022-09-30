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
        $response = Arr::only($this->resource->toArray(), ['identifier', 'name', 'text', 'comments', 'rarity', 'flavour', 'stats', 'keywords', 'legality', 'next', 'prev', 'available', 'class', 'type', 'subType', 'talent']);

        if (object_get($this->resource, 'sku')) {
            $response['sku'] = new Sku($this->resource->sku);
        }

        $response['buyLink'] = $this->buyLink();
        $response['image'] = $this->baseImage($this->resource->image);

        if (isset($this->resource->ownedTotal)) {
            $response['ownedTotal'] = (int) $this->resource->ownedTotal;
        }

        $response['sideboardTotal'] = object_get($this, 'resource.sideboardTotal', 0);

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

    private function buyLink()
    {
        return 'https://www.tcgplayer.com/search/flesh-and-blood-tcg/product?q='.$this->resource->name.'&utm_campaign=affiliate&utm_medium=FABDB&utm_source=cardtech';
    }
}
