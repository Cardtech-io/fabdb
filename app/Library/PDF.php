<?php
namespace FabDB\Library;

use GuzzleHttp\Client;

class PDF
{
    public static function generate(string $url)
    {
        $client = new Client;

        $url = urlencode($url);
        $url = "https://api.pdflayer.com/api/convert?access_key=1b85dbdcaaa85d9715d4d00ebc0ae8bc&document_url=$url";

        $response = $client->post($url);

        dd((string) $response->getBody());
    }
}
