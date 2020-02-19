<?php
namespace FabDB\Domain\Content;

use FabDB\Library\Repository;

interface ArticleRepository extends Repository
{
    public function view($slug): Article;
}
