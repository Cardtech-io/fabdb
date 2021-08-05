<?php
namespace FabDB\Http\Controllers\Api;

use FabDB\Domain\Cards\PrintingRepository;
use FabDB\Http\Controllers\Controller;
use FabDB\Http\Resources\PrintingResource;
use Illuminate\Http\Request;

class PrintingController extends Controller
{
    public function view(Request $request, PrintingRepository $printings)
    {
        return new PrintingResource($printings->findBySku($request->sku));
    }
}
