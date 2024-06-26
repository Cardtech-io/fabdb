<?php
namespace FabDB\Domain\Users;

use FabDB\Domain\Collection\OwnedCard;
use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class User extends Model implements Authenticatable
{
    use Notifiable;
    use Raiseable;
    use UserAuthenticatable;
    use Sluggable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email',
        'name',
        'password',
        'gemId',
        'view',
        'width',
        'theme',
    ];

    protected $casts = [
        'slug' => 'string'
    ];

    protected $hidden = [
        'id',
        'email',
        'password',
        'api_secret',
        'created_at',
        'updated_at',
        'token'
    ];

    protected $appends = ['hasPassword'];

    public function ownedCards()
    {
        return $this->hasMany(OwnedCard::class);
    }
    public static function register($email)
    {
        $user = new User(['email' => $email]);
        $user->generateAuthToken();
        $user->raise(new UserHasRegistered($user));

        return $user;
    }

    public function auth()
    {
        $this->generateAuthToken();
        $this->raise(new UserRequestedAuth($this));
    }

    public function clearToken()
    {
        $this->token = null;
    }

    public function getHasCollectionAttribute(): bool
    {
        return !empty($this->ownedCards()->count());
    }

    public function getHasPasswordAttribute(): bool
    {
        return !empty($this->password);
    }

    public function updateProfile($email, $newPassword, $name, $gemId, $currency, $need, string $avatar, string $theme, string $width)
    {
        $this->email = $email;
        $this->password = $newPassword;
        $this->name = $name;
        $this->gemId = $gemId;
        $this->currency = $currency;
        $this->need = $need;
        $this->theme = $theme;
        $this->width = $width;

        if ($this->subscribed()) {
            $this->avatar = $avatar;
        }

        $this->raise(new ProfileWasUpdated($this->id, $email, $name, $gemId, $currency, $need, $avatar, $theme, $width));

        return $this;
    }

    public function completeProfile($name, $gemId)
    {
        $this->name = $name;
        $this->gemId = $gemId;

        $this->raise(new ProfileWasCompleted($this->id, $name, $gemId));

        return $this;
    }

    public function isEditor()
    {
        return $this->role === 'editor';
    }

    public function isStoreOwner()
    {
        return $this->role == 'owner';
    }

    public function updateName(string $name)
    {
        $this->name = $name;

        $this->raise(new NameWasUpdated($this->id, $name));
    }

    public function setNameAttribute($name)
    {
        $this->attributes['name'] = $name;

        if ($this->isDirty('name') && $this->subscription === 'legendary') {
            $this->attributes['vanity_slug'] = Str::slug($name);
        } else {
            $this->attributes['vanity_slug'] = null;
        }
    }

    public function getAvatarAttribute()
    {
        return Arr::get($this->attributes, 'avatar') ?: 'bauble';
    }

    private function generateAuthToken()
    {
        $parts = [];

        while (count($parts) < 3) {
            $parts[] = Str::random(2);
        }

        $this->token = strtoupper(implode('-', $parts));
    }

    public function subscribed()
    {
        return !is_null($this->subscription);
    }

    public function setPasswordAttribute(string $password)
    {
        if (empty($password)) return;

        $this->attributes['password'] = bcrypt($password);
    }

    public function patron(): bool
    {
        return in_array($this->subscription, ['supporter', 'majestic', 'legendary', 'fabled']);
    }

    public function setApiKey(string $token, string $secret)
    {
        $this->apiToken = $token;
        $this->apiSecret = $secret;
    }

    public function setApiSecretAttribute(string $secret)
    {
        $this->attributes['api_secret'] = Crypt::encryptString($secret);
    }

    public function getApiSecretAttribute(string $secret)
    {
        return Crypt::decryptString($secret);
    }
}
