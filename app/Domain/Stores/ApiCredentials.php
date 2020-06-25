<?php
namespace FabDB\Domain\Stores;

class ApiCredentials
{
    /**
     * @var array
     */
    private $credentials;

    public function __construct(array $credentials)
    {
        $this->credentials = $credentials;
    }

    /**
     * Returns the service that the store is using for its API.
     * Currently only supporting shopify.
     *
     * @return string
     */
    public function service(): string
    {
        return 'shopify';
    }

    public function token(): string
    {
        return $this->credentials['token'];
    }

    public function password(): string
    {
        return $this->credentials['password'];
    }

    public function endpoint(): string
    {
        return $this->credentials['endpoint'];
    }

    /**
     * Converts the object to JSON format.
     *
     * @return string
     */
    public function toJson(): string
    {
        return json_encode($this->credentials);
    }
}
