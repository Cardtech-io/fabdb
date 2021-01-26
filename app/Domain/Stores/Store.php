<?php
namespace FabDB\Domain\Stores;

use FabDB\Library\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Store extends Model
{
    use SoftDeletes;

    protected $hidden = ['id', 'api_credentials'];

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
