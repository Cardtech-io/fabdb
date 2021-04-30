<?php
namespace FabDB\Domain\Stores;

use FabDB\Domain\Shopify\AccessToken;
use FabDB\Library\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Store extends Model
{
    use SoftDeletes;

    protected $hidden = ['id', 'api_credentials'];
    protected $fillable = ['domain', 'currency', 'name'];

    /**
     * Create a new store based on shopify data.
     */
    public static function install(array $details, AccessToken $accessToken)
    {
        $endpoint = str_replace('.myshopify.com', '', $details['domain']);

        $credentials = new ApiCredentials([
            'endpoint' => $endpoint,
            'token' => $accessToken->token(),
            'scopes' => $accessToken->scopes()
        ]);

        $store = new Store($details);
        $store->apiCredentials = $credentials;

        return $store;
    }

    protected static function booted()
    {
        static::addGlobalScope(new ActiveScope);
    }

    public function setApiCredentialsAttribute(ApiCredentials $credentials)
    {
        $this->attributes['api_credentials'] = encrypt($credentials->toJson());
    }

    public function getApiCredentialsAttribute($credentials): ApiCredentials
    {
        return new ApiCredentials(json_decode(decrypt($credentials), true));
    }
}
