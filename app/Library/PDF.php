<?php
namespace FabDB\Library;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Support\Facades\Log;

class PDF
{
    const ACCESS_KEY = 'e399e1358bb5bdf0f91f60fcda801736';

    public static function generate(string $html)
    {
        $client = new Client;

        $url = "https://api.pdfcrowd.com/convert/";

        try {
            $response = $client->post($url, [
                'auth' => ['thurukk', self::ACCESS_KEY],
                'form_params' => ['text' => $html]
            ]);
        }
        catch (ClientException $e) {
            Log::debug($e->getMessage());
        }
        
        return (string) $response->getBody();
    }
}
