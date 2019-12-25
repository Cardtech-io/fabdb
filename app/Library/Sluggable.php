<?php
namespace FabDB\Library;

use Eloquence\Behaviours\Slug;
use Eloquence\Exceptions\UnableToCreateSlugException;

trait Sluggable
{
    /**
     * When added to a model, the trait will bind to the creating and created
     * events, generating the appropriate slugs as necessary.
     */
    public static function bootSluggable()
    {
        static::creating(function ($model) {
            $model->generateSlug();
        });
    }

    /**
     * Generate a slug based on the main model key.
     */
    public function generateSlug()
    {
        $slug = Slug::fromId($this->getKey() ?? rand());

        // Ensure slug is unique (since the fromId() algorithm doesn't produce unique slugs)
        $attempts = 10;

        while ($this->isExistingSlug($slug)) {
            if ($attempts <= 0) {
                throw new UnableToCreateSlugException(
                    "Unable to find unique slug for record '{$this->getKey()}', tried 10 times..."
                );
            }

            $slug = Slug::random();
            $attempts--;
        }

        $this->slug = (string) $slug;
    }

    /**
     * @param Slug $slug
     * @return bool
     */
    private function isExistingSlug(Slug $slug)
    {
        return $this->newQuery()
            ->where('slug', (string) $slug)
            ->where('id', '!=', $this->id)
            ->exists();
    }
}
