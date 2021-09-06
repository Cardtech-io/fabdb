<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Cards\ArtistRepository;
use FabDB\Http\Resources\ArtistResource;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function view(Request $request, ArtistRepository $artists)
    {
        return new ArtistResource($artists->findBySlug($request->artist));
    }
}
