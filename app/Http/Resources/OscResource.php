<?php
namespace FabDB\Http\Resources;

use FabDB\Domain\Cards\Card;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

class OscResource extends JsonResource
{
    public function toArray($request)
    {
        $response = [];

        $this->hero($response);

        $response['cardBack'] = $this->resource->cardBackImage();
        $response['weapons'] = $this->cards($this->resource->cards->weapons());
        $response['equipment'] = $this->cards($this->resource->cards->equipment());
        $response['maindeck'] = $this->cards($this->resource->cards->other());
        $response['sideboard'] = $this->cards($this->resource->sideboard, false);

        return $response;
    }

    private function hero(array &$response)
    {
        $hero = $this->resource->cards->hero();

        $response['hero'] = $hero->name;
        $response['hero_id'] = $hero->printings->first()->sku->stripped();
    }

    private function cards(Collection $cards, bool $removeSideboard = true)
    {
        return $cards->map(function($card) use ($removeSideboard) {
            $payload = [
                'id' => $this->id($card),
                'image' => $card->image,
                'name' => $card->name,
                'count' => $card->pivot->total
            ];

            if ($removeSideboard) {
                $payload['count'] -= $this->sideboardTotal($card);
            }

            return $payload;
        });
    }

    private function id(Card $card)
    {
        return $card->printings->first()->sku->stripped();
    }

    private function sideboardTotal(Card $card)
    {
        $sideboard = $this->resource->sideboard->first(function($sideboardCard) use ($card) {
            return $sideboardCard->identifier->raw() === $card->identifier->raw();
        });

        return object_get($sideboard, 'pivot.total', 0);
    }
}

