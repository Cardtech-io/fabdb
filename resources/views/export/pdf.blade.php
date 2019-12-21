<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{ asset(mix('/css/fabdb.css')) }}">
    </head>
    <body class="text-sm">
        <!-- Header -->
        <header>
            <div class="text-right">
                Logo here
            </div>
            <h1 class="font-serif text-4xl text-center uppercase">Deck registration sheet</h1>
        </header>

        <!-- Player Details -->
        <table cellspacing="5" class="w-full border-separate mb-4">
            <tbody>
                <tr>
                    <td class="w-1/2 px-2 py-1 border border-gray-500 font-serif">Full name</td>
                    <td class="w-1/2 px-2 py-1 border border-gray-500 font-serif" colspan="2">GEM Player ID</td>
                </tr>
                <tr>
                    <td class="w-1/2 px-2 py-1 border border-gray-500 font-serif">{{ $deck->hero()->name}}</td>
                    <td class="w-1/4 px-2 py-1 border border-gray-500 font-serif">Date</td>
                    <td class="w-1/4 px-2 py-1 border border-gray-500 font-serif">Event</td>
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
                    @for ($i = 0; $i < 5; $i++)
                        @include('export/equipment', ['deck' => $deck, 'key' => $i])
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
                            <div class="float-left w-auto"><img src="{{ asset('/img/pitch-1.png') }}" class="h-10"></div>
                            <div class=" float-left p-2">Pitch 1 (Red)</div>
                        </td>
                        <td class="border border-gray-500 font-serif clearfix p-1" colspan="2">
                            <div class="float-left w-auto"><img src="{{ asset('/img/pitch-2.png') }}" class="h-10"></div>
                            <div class=" float-left p-2">Pitch 2 (Yellow)</div>
                        </td>
                        <td class="border border-gray-500 font-serif clearfix p-1" colspan="2">
                            <div class="float-left w-auto"><img src="{{ asset('/img/pitch-3.png') }}" class="h-10"></div>
                            <div class=" float-left p-2">Pitch 3 (Blue)</div>
                        </td>
                    </tr>
                    @for ($i = 0; $i < 18; $i++)
                    <tr>
                        <?php $pitch1 = $deck->other(1)->get($i); ?>
                        <?php $pitch2 = $deck->other(2)->get($i); ?>
                        <?php $pitch3 = $deck->other(3)->get($i); ?>
                        <td class="px-2 py-1 border border-gray-500 @if ($i == 17) pdf-totals-bottom @endif font-serif text-center" width="40">{!! object_get($pitch1, 'total', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">{!! object_get($pitch1, 'name', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 @if ($i == 17) pdf-totals-bottom @endif font-serif text-center" width="40">{!! object_get($pitch2, 'total', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">{!! object_get($pitch2, 'name', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 @if ($i == 17) pdf-totals-bottom @endif font-serif text-center" width="40">{!! object_get($pitch3, 'total', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">{!! object_get($pitch3, 'name', '&nbsp;') !!}</td>
                    </tr>
                    @endfor
                    <tr>
                        <td class="px-2 py-1 border border-black font-serif text-center" width="40">{{ $deck->other(1)->total() }}</td>
                        <td class="px-2 py-1 border border-gray-500 pdf-totals-right font-serif" width="30%">Total Pitch 1</td>
                        <td class="px-2 py-1 border border-black font-serif text-center" width="40">{{ $deck->other(2)->total() }}</td>
                        <td class="px-2 py-1 border border-gray-500 pdf-totals-right font-serif" width="30%">Total Pitch 2</td>
                        <td class="px-2 py-1 border border-black font-serif text-center" width="40">{{ $deck->other(3)->total() }}</td>
                        <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">Total Pitch 3</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mx-1 mb-4 clearfix">
            <div class="float-right border-2 border-black px-2 py-1 font-serif text-xl w-2/5">Card Total: {{  $deck->equipmentTotal() + $deck->otherTotal() }}</div>
        </div>
    </body>
</html>