<?php
namespace FabDB\Domain\Users;

use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use FabDB\Library\Sluggable;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Arr;
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
        'gemId',
        'view',
    ];

    protected $casts = [
        'slug' => 'string'
    ];

    protected $hidden = [
        'id',
        'created_at',
        'updated_at',
        'token'
    ];

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

    public function updateProfile($email, $name, $gemId, $need, $view, string $avatar)
    {
        $this->email = $email;
        $this->name = $name;
        $this->gemId = $gemId;
        $this->need = $need;
        $this->view = $view;

        if ($this->subscribed()) {
            $this->avatar = $avatar;
        }

        $this->raise(new ProfileWasUpdated($this->id, $email, $name, $gemId, $need, $view, $avatar));

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
}
