<?php
namespace FabDB\Domain\Stores;

use FabDB\Library\Model;

class Store extends Model
{
    protected $hidden = ['id', 'api_credentials'];

    public function setApiCredentialsAttribute(ApiCredentials $credentials)
    {
        $this->attributes['api_credentials'] = encrypt($credentials->toJson());
    }

    public function getApiCredentialsAttribute($credentials): ApiCredentials
    {
        return new ApiCredentials(json_decode(decrypt($credentials), true));
    }
}
