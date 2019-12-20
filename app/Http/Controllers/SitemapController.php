<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\CardRepository;

class SitemapController extends Controller
{
    public function view(CardRepository $cards)
    {
        return view('sitemap', ['cards' => $cards->all()]);
    }
}