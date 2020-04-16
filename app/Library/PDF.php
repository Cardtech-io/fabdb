<?php
namespace FabDB\Library;

use GuzzleHttp\Client;

class PDF
{
    const ACCESS_KEY = '1b85dbdcaaa85d9715d4d00ebc0ae8bc';

    public static function generate(string $html)
    {
        $client = new Client;

        $url = "https://api.pdflayer.com/api/convert?access_key=".self::ACCESS_KEY."&document_html=$html";

        $response = $client->post($url);

        return (string) $response->getBody();
    }
}
