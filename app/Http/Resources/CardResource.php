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
        $response['listings'] = $this->whenLoaded('listings');
        $response['rulings'] = $this->whenLoaded('rulings');
        $response['variants'] = CardResource::collection($this->whenLoaded('variants'));
        $response['variantOf'] = new CardResource($this->whenLoaded('variantOf'));

        $this->polymorphicTotal($response, 'deck_cards');
        $this->polymorphicTotal($response, 'sideboard');

        return $response;
    }

    private function image($card)
    {
        $domain = config('services.imgix.domain');
        $set = strtolower($card->identifier->set());
        $id = $card->identifier->strippedId();

        return "https://$domain/cards/$set/$id.png?w=300&fit=clip&auto=compress";
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
