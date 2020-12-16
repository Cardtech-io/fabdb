<?php
namespace FabDB\Http\Resources;

use FabDB\Domain\Cards\Card;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class CardResource extends JsonResource
{
    public function toArray($request)
    {
        $this->resource->setAppends([]);

        $response = Arr::only($this->resource->toArray(), ['identifier', 'name', 'text', 'comments', 'rarity', 'flavour', 'stats', 'keywords', 'next', 'prev']);
        $response['image'] = $this->image($this->resource);
        $response['ad'] = new ListingResource($this->whenLoaded('ad'));
        $response['printings'] = $this->whenLoaded('printings');
        $response['listings'] = $this->whenLoaded('listings');
        $response['rulings'] = $this->whenLoaded('rulings');

        $this->polymorphicTotal($response, 'deck_cards');
        $this->polymorphicTotal($response, 'sideboard');

        return $response;
    }

    private function image($card)
    {
        $domain = config('services.imgix.domain');
        
        return "https://$domain/cards/printings/{$card->printings->first()->sku->raw()}.png?w=300&fit=clip&auto=compress";
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
