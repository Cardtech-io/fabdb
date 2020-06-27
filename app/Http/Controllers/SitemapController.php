<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\CardRepository;
use FabDB\Domain\Content\ArticleRepository;
use FabDB\Domain\Decks\DeckRepository;

class SitemapController extends Controller
{
    public function view(DeckRepository $decks, CardRepository $cards, ArticleRepository $articles)
    {
        return view('sitemap', [
            'cards' => $cards->all(),
            'articles' => $articles->all(),
            'decks' => $decks->all()
        ]);
    }
}
