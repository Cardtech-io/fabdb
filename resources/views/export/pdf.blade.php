<?php
use FabDB\Domain\Cards\Cards;
$css = \Illuminate\Support\Facades\Storage::disk('web')->get('/css/fabdb.css');
?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
            {{ $css }}
        </style>
    </head>
    <body class="text-sm">
        <!-- Header -->
        <header>
            <h1 class="font-serif text-4xl text-center uppercase">Deck registration sheet</h1>
        </header>

        <!-- Player Details -->
        <table cellspacing="5" class="w-full border-separate mb-4">
            <tbody>
                <tr>
                    <td class="w-1/3 px-2 py-1 border border-gray-500 font-serif"><span class="uppercase text-gray-600">Name:</span> {{ $name }}</td>
                    <td class="w-2/3 px-2 py-1 border border-gray-500 font-serif" colspan="2"><span class="uppercase text-gray-600">GEM ID:</span> {{ $gemId }}</td>
                </tr>
                <tr>
                    <td class="w-1/3 px-2 py-1 border border-gray-500 font-serif"><span class="uppercase text-gray-600">Hero:</span> {{ $deck->hero->name}}</td>
                    <td class="w-1/3 px-2 py-1 border border-gray-500 font-serif"><span class="uppercase text-gray-600">Date:</span> {{ date('jS F Y') }}</td>
                    <td class="w-1/3 px-2 py-1 border border-gray-500 font-serif"><span class="uppercase text-gray-600">Event:</span> {{ $event }}</td>
                </tr>
            </tbody>
        </table>

        <!-- Equipment -->
        <div class="mx-1 mb-4">
            <table class="w-full border-collapse">
                <tbody>
                    <tr>
                        <td class="px-2 py-1 border border-gray-500 font-serif uppercase text-center" colspan="6">Weapons / Equipment</td>
                    </tr>
                    <?php $equipment = new Cards($deck->equipment()->merge($deck->weapons())->chunk(5)->values()); ?>
                    @for ($i = 0; $i < 5; $i++)
                        @include('export/equipment', ['equipment' => $equipment, 'key' => $i])
                    @endfor
                </tbody>
            </table>
        </div>

        <!-- Cards -->
        <div class="mx-1 mb-4">
            <table class="w-full border-collapse">
                <tbody>
                    <tr>
                        <td class="border border-gray-500 font-serif clearfix p-1" colspan="2">
                            <div class="float-left w-auto"><img src="https://fabdb.net/img/pitch-0.png" class="h-8"></div>
                            <div class="float-left w-auto"><img src="https://fabdb.net/img/pitch-1.png" class="h-8"></div>
                            <div class=" float-left p-2 h-8">Pitch 0 / Pitch 1 (Red)</div>
                        </td>
                        <td class="border border-gray-500 font-serif clearfix p-1" colspan="2">
                            <div class="float-left w-auto"><img src="https://fabdb.net/img/pitch-2.png" class="h-8"></div>
                            <div class=" float-left p-2 h-8">Pitch 2 (Yellow)</div>
                        </td>
                        <td class="border border-gray-500 font-serif clearfix p-1" colspan="2">
                            <div class="float-left w-auto"><img src="https://fabdb.net/img/pitch-3.png" class="h-8"></div>
                            <div class=" float-left p-2 h-8">Pitch 3 (Blue)</div>
                        </td>
                    </tr>
                    <?php $maxLines = max($deck->other(0)->count() + $deck->other(1)->count(), $deck->other(2)->count(), $deck->other(3)->count()); ?>
                    <?php $pitch01 = $deck->other(0)->merge($deck->other(1)); ?>
                    @for ($i = 0; $i < $maxLines; $i++)
                    <tr>
                        <?php $pitch1 = $pitch01->get($i); ?>
                        <?php $pitch2 = $deck->other(2)->get($i); ?>
                        <?php $pitch3 = $deck->other(3)->get($i); ?>
                        <td class="px-2 py-1 border border-gray-500 @if ($i == $maxLines-1) pdf-totals-bottom @endif font-serif text-center" width="40">{!! object_get($pitch1, 'pivot.total', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">{!! object_get($pitch1, 'name', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 @if ($i == $maxLines-1) pdf-totals-bottom @endif font-serif text-center" width="40">{!! object_get($pitch2, 'pivot.total', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">{!! object_get($pitch2, 'name', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 @if ($i == $maxLines-1) pdf-totals-bottom @endif font-serif text-center" width="40">{!! object_get($pitch3, 'pivot.total', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">{!! object_get($pitch3, 'name', '&nbsp;') !!}</td>
                    </tr>
                    @endfor
                    <tr>
                        <td class="px-2 py-1 border border-black font-serif text-center" width="40">{{ $deck->other(0)->total() + $deck->other(1)->total() }}</td>
                        <td class="px-2 py-1 border border-gray-500 pdf-totals-right font-serif" width="30%">Total Pitch 0 / Pitch 1</td>
                        <td class="px-2 py-1 border border-black font-serif text-center" width="40">{{ $deck->other(2)->total() }}</td>
                        <td class="px-2 py-1 border border-gray-500 pdf-totals-right font-serif" width="30%">Total Pitch 2</td>
                        <td class="px-2 py-1 border border-black font-serif text-center" width="40">{{ $deck->other(3)->total() }}</td>
                        <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">Total Pitch 3</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mx-1 mb-4 clearfix">
            <div class="float-left flex">
                <a href="https://fabdb.net" class="font-serif uppercase">Deck managed at fabdb.net</a>
            </div>
            <div class="float-right border-2 border-black px-2 py-1 font-serif text-xl w-2/5">Card Total: {{ $deck->cards->total() - 1 }}</div>
        </div>
    </body>
</html>
