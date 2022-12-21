<?php

namespace FabDB\Http\Resources\Api;

use FabDB\Http\Resources\ArtistResource;
use FabDB\Http\Resources\PrintingResource;
use Illuminate\Support\Arr;

class CardResource extends \FabDB\Http\Resources\CardResource
{
    public function toArray($request)
    {
        $response = Arr::only(
            $this->resource->toArray(), [
            'identifier',
            'name',
            'text',
            'comments',
            'rarity',
            'flavour',
            'stats',
            'keywords',
            'legality',
            'available',
            'class',
            'type',
            'subTypes',
            'talent',
        ]);

        $response['image'] = $this->alteredImage($this->resource->image, $request);

        $response['artist'] = new ArtistResource($this->whenLoaded('artist'));
        $response['printings'] = PrintingResource::collection($this->whenLoaded('printings'));
        $response['rulings'] = $this->whenLoaded('rulings');

        return $response;
    }
}
