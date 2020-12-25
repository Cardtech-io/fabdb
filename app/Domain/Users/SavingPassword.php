<?php
namespace FabDB\Domain\Users;
use Illuminate\Support\Arr;

/**
 * Simple DTO to clean up parameters for the profile update. Also keeps some
 * logic here rather than in the command.
 */
class SavingPassword
{
    /**
     * @var array
     */
    private $input;

    public function __construct(array $input)
    {
        $this->input = $input;
    }

    public function needToUpdate(): bool
    {
        return !empty(Arr::get($this->input, 'newPassword', ''));
    }

    public function password()
    {
        return $this->input['newPassword'];
    }
}
