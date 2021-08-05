<?php
namespace FabDB\Http\Controllers;

use FabDB\Domain\Content\FeatureRepository;

class FeatureController extends Controller
{
    public function top(FeatureRepository $features)
    {
        return $features->top();
    }
}
