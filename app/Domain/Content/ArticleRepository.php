<?php
namespace FabDB\Domain\Content;

use Carbon\Carbon;
use FabDB\Library\Repository;

interface ArticleRepository extends Repository
{
    public function view($slug): Article;

    public function search(array $params, string $useCase, int $userId = null);

    public function nextOrPrev(string $nextOrPrev, Carbon $publishedAt);

    public function upcoming(array $params);
}
