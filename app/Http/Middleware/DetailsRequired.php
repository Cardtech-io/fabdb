<?php
namespace FabDB\Http\Middleware;

class DetailsRequired
{
    public function handle($request, \Closure $next, $requiredField)
    {
        $validFields = [
            'name' => 'name',
            'gemId' => 'GEM id',
        ];

        if (!isset($validFields[$requiredField])) {
            throw new InvalidField;
        }

        if (!$request->user()->$requiredField) {
            return response([
                'status' => 'error',
                'message' => 'You must complete your '.$validFields[$requiredField].' before continuing.'
            ], 422)->header('X-Requires', 'name');
        }

        return $next($request);
    }
}