<?php
namespace FabDB\Domain\Content;

use Carbon\Carbon;
use FabDB\Library\Repository;

interface ArticleRepository extends Repository
{
    public function view($slug): Article;

    public function search($keywords, int $perPage, string $useCase, int $userId = null);

    public function nextOrPrev(string $nextOrPrev, Carbon $publishedAt);
}
