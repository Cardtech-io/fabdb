<?php
namespace FabDB\Domain\Shopify;

class AccessToken
{
    /**
     * @var string
     */
    private $token;

    /**
     * @var string
     */
    private $scopes;

    private function __construct(string $token, string $scopes)
    {
        $this->token = $token;
        $this->scopes = $scopes;
    }

    public static function fromJson(string $json)
    {
        [$token, $scopes] = array_values(json_decode($json, true));

        return new self($token, $scopes);
    }

    public function token(): string
    {
        return $this->token;
    }

    public function scopes(): string
    {
        return $this->scopes;
    }

    public function __toString(): string
    {
        return $this->token;
    }
}
