<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Content\ArticleRepository;

class SitemapController extends Controller
{
    public function view(CardRepository $cards, ArticleRepository $articles)
    {
        return view('sitemap', [
            'cards' => $cards->all(),
            'articles' => $articles->all()
        ]);
    }
}
