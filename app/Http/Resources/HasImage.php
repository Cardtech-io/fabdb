<?php
namespace FabDB\Http\Resources;

trait HasImage
{
    protected function image($card)
    {
        $domain = config('services.imgix.domain');

        return "https://$domain/{$card->image}?w=300&fit=clip&auto=compress";
    }
}
