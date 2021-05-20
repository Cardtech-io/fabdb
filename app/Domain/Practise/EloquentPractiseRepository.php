<?php
namespace FabDB\Domain\Practise;

use FabDB\Library\EloquentRepository;
use FabDB\Library\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;

class EloquentPractiseRepository extends EloquentRepository implements PractiseRepository
{
    protected function model(): Model
    {
        return new Practise;
    }

    public function view(string $slug)
    {
        return $this->newQuery()
            ->selectRaw('practises.*, users.slug AS user_slug')
            ->join('users', 'users.id', 'practises.user_id')
            ->with('packs')
            ->where('practises.slug', $slug)
            ->first();
    }

    public function forUser(int $userId)
    {
        return $this->newQuery()
            ->whereUserId($userId)
            ->orderBy('created_at', 'desc')
            ->paginate();
    }
}
