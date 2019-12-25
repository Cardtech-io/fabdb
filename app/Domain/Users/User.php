<?php
namespace FabDB\Domain\Users;

use Eloquence\Behaviours\Sluggable;
use FabDB\Library\Model;
use FabDB\Library\Raiseable;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Notifications\Notifiable;
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
        'gemId'
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

    public function updateProfile($email, $name, $gemId)
    {
        $this->email = $email;
        $this->name = $name;
        $this->gemId = $gemId;

        $this->raise(new ProfileWasUpdated($this->id, $email, $name, $gemId));

        return $this;
    }

    private function generateAuthToken()
    {
        $parts = [];

        while (count($parts) < 3) {
            $parts[] = Str::random(2);
        }

        $this->token = strtoupper(implode('-', $parts));
    }
}
