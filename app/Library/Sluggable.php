<?php
namespace FabDB\Library;

trait Sluggable
{
    /**
     * When added to a model, the trait will bind to the creating and created
     * events, generating the appropriate slugs as necessary.
     */
    public static function bootSluggable()
    {
        static::creating(function ($model) {
            $model->generateIdSlug();
        });
    }

    /**
     * Generate a slug based on the main model key.
     */
    public function generateIdSlug()
    {
        $slug = $this->createSlug();

        // Ensure slug is unique (since the fromId() algorithm doesn't produce unique slugs)
        $attempts = 10;
        while ($this->slugExists($slug)) {
            if ($attempts <= 0) {
                throw new \Exception("Unable to find unique slug for record '{$this->getKey()}', tried 10 times...");
            }

            $slug = $this->createSlug();
            $attempts--;
        }

        $this->slug = $slug;
    }

    protected function createSlug(): string
    {
        $exclude = ['/', '+', '=', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        $length = 8;
        $string = '';

        while (($len = strlen($string)) < $length) {
            $size = $length - $len;
            $bytes = random_bytes($size);
            $string .= substr(str_replace($exclude, '', base64_encode($bytes)), 0, $size);
        }

        return $string;
    }

    /**
     * Allows laravel to start using the sluggable field as the string for routes.
     *
     * @return mixed
     */
    public function getRouteKey()
    {
        return $this->slug;
    }

    /**
     * @param string $slug
     * @return bool
     */
    private function slugExists(string $slug): bool
    {
        return $this->newQuery()
            ->where('slug', $slug)
            ->where($this->getQualifiedKeyName(), '!=', $this->getKey())
            ->exists();
    }
}