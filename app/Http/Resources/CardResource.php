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

        $response = Arr::except($this->resource->toArray(), ['listings', 'pivot', 'searchText']);
        $response['image'] = $this->image($this->resource);

        $this->polymorphicTotal($response, 'deck_cards');
        $this->polymorphicTotal($response, 'sideboard');

        return $response;
    }

    private function image(Card $card)
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
