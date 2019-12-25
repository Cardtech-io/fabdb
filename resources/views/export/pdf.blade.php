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
                    <td class="w-1/3 px-2 py-1 border border-gray-500 font-serif"><span class="uppercase text-gray-600">Hero:</span> {{ $deck->hero()->name}}</td>
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
                            <div class="float-left w-auto"><img src="{{ asset('/img/pitch-1.png') }}" class="h-8"></div>
                            <div class=" float-left p-2 h-8">Pitch 1 (Red)</div>
                        </td>
                        <td class="border border-gray-500 font-serif clearfix p-1" colspan="2">
                            <div class="float-left w-auto"><img src="{{ asset('/img/pitch-2.png') }}" class="h-8"></div>
                            <div class=" float-left p-2 h-8">Pitch 2 (Yellow)</div>
                        </td>
                        <td class="border border-gray-500 font-serif clearfix p-1" colspan="2">
                            <div class="float-left w-auto"><img src="{{ asset('/img/pitch-3.png') }}" class="h-8"></div>
                            <div class=" float-left p-2 h-8">Pitch 3 (Blue)</div>
                        </td>
                    </tr>
                    @for ($i = 0; $i < 16; $i++)
                    <tr>
                        <?php $pitch1 = $deck->other(1)->get($i); ?>
                        <?php $pitch2 = $deck->other(2)->get($i); ?>
                        <?php $pitch3 = $deck->other(3)->get($i); ?>
                        <td class="px-2 py-1 border border-gray-500 @if ($i == 15) pdf-totals-bottom @endif font-serif text-center" width="40">{!! object_get($pitch1, 'total', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">{!! object_get($pitch1, 'name', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 @if ($i == 15) pdf-totals-bottom @endif font-serif text-center" width="40">{!! object_get($pitch2, 'total', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">{!! object_get($pitch2, 'name', '&nbsp;') !!}</td>
                        <td class="px-2 py-1 border border-gray-500 @if ($i == 15) pdf-totals-bottom @endif font-serif text-center" width="40">{!! object_get($pitch3, 'total', '&nbsp;') !!}</td>
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
            <div class="float-left flex">
                <a href="https://fabdb.net">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109 45" class="fill-current h-10">
                        <g fill-rule="evenodd">
                            <path d="M22 44c-5.972-2.009-10.273-5.229-12.904-9.66-2.615-4.406-5.312-12.93-8.09-25.57a.216.216 0 01.173-.26c4.347-.712 7.78-1.52 10.299-2.423C14.04 5.167 17.548 3.472 22 1m0 0c4.66 2.472 8.352 4.168 11.033 5.087 2.636.903 6.23 1.71 10.78 2.423l.013.002c.12.027.195.142.169.259-2.91 12.64-5.732 21.163-8.47 25.568C32.773 38.771 28.27 41.991 22.02 44" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.592 34.064c1.857-.146 3.383-.146 4.951-.146 1.445 0 3.384.037 4.993.11v-.51c-.412 0-2.27-.11-2.93-.984-.394-.487-.525-1.175-.535-3.242v-7.028h4.97c1.044.004 2.184.056 2.828.656.701.583.825 1.384.825 2.076h.701c-.04-.801-.116-1.136-.123-3.14v-.284c0-2.294.082-2.695.082-3.496h-.66c-.041.656-.124 1.53-.784 2.149-.66.546-1.568.655-3.26.655h-4.58v-9.323h4.415c1.238 0 3.425-.073 4.291.692.207.146 1.032.765 1.115 2.404h.701c-.165-1.675-.124-4.48-.124-4.48H20.37a91.4 91.4 0 01-4.654-.109v.473c1.526.11 2.063.838 2.145.947.413.547.496 1.348.496 3.642v12.747c0 3.132-.042 4.152-.743 4.844-.62.619-1.486.8-2.022.837v.51zm21.128-.896c-.192-.192-.256-.416-.256-.704 0-.384.224-1.12.544-1.92l2.985-5.28h5.623l1.888 5.28c.256.736.48 1.472.48 1.92 0 .288-.064.512-.256.704-.32.288-1.088.416-1.344.448v.448c.896-.032 2.4-.128 3.296-.128.896 0 2.368.064 3.264.128v-.48c-1.152-.032-1.472-.864-1.632-1.056-.32-.512-1.056-2.624-1.184-3.04l-6.176-16.896-.912.721-6.032 16.811m8.128-6.14h-5.568c1.184-3.008 2.848-7.328 2.912-7.552.352 1.152.544 1.664 1.024 3.04l1.632 4.512zm15.968 10.08c2.304 0 4.672-.256 6.24-1.824 1.12-1.088 1.632-2.496 1.632-4.032 0-3.68-2.464-5.12-5.856-5.408 2.368-.48 4.768-1.888 4.768-5.12 0-4.608-4.992-4.704-6.848-4.704-2.048 0-2.944.096-4.32.096-1.12 0-1.504-.032-2.752-.096v.416c1.184.096 1.6.736 1.664.832.32.48.384 1.184.384 3.2v11.2c0 2.752-.032 3.648-.576 4.256-.48.544-1.152.704-1.568.736v.448c1.344-.128 2.24-.128 3.36-.128 1.216 0 2.528.128 3.872.128zm-.48-11.712c-.736 0-1.376-.064-1.824-.064v-8.096c.48-.096.928-.128 1.632-.128 1.6 0 4.48.128 4.48 4.064 0 3.136-1.984 3.872-2.176 3.968-.48.16-1.28.256-2.112.256zm.672 10.592c-.384 0-.96 0-1.408-.064-.8-.096-1.088-.48-1.088-1.504v-7.872c.448-.032.608-.032 1.632-.032 1.472 0 5.504.096 5.504 4.672 0 3.616-2.016 4.768-4.64 4.8zm17.696 1.12c1.856 0 3.776-.128 5.152-.544 4.288-1.28 7.136-4.768 7.136-10.528 0-9.984-8.832-10.016-11.936-10.016-1.536 0-3.424.096-4.896.096-1.088 0-1.248-.032-2.528-.096v.416c1.184.096 1.6.736 1.664.832.32.48.384 1.184.384 3.2v11.2c0 2.752-.032 3.648-.576 4.256-.48.544-1.152.704-1.568.736v.448c1.28-.064 1.472-.096 2.56-.096 1.504 0 2.88.096 4.608.096zm.992-1.248c-1.664 0-1.728-.064-2.144-.096-.876-.09-.982-.695-.991-1.463l-.001-16.905c.32-.064 1.472-.192 2.912-.192 6.176 0 8.32 3.968 8.32 9.216 0 5.984-2.176 9.44-8.096 9.44zm21.312 1.248c2.304 0 4.672-.256 6.24-1.824 1.12-1.088 1.632-2.496 1.632-4.032 0-3.68-2.464-5.12-5.856-5.408 2.368-.48 4.768-1.888 4.768-5.12 0-4.608-4.992-4.704-6.848-4.704-2.048 0-2.944.096-4.32.096-1.12 0-1.504-.032-2.752-.096v.416c1.184.096 1.6.736 1.664.832.32.48.384 1.184.384 3.2v11.2c0 2.752-.032 3.648-.576 4.256-.48.544-1.152.704-1.568.736v.448c1.344-.128 2.24-.128 3.36-.128 1.216 0 2.528.128 3.872.128zm-.48-11.712c-.736 0-1.376-.064-1.824-.064v-8.096c.48-.096.928-.128 1.632-.128 1.6 0 4.48.128 4.48 4.064 0 3.136-1.984 3.872-2.176 3.968-.48.16-1.28.256-2.112.256zm.672 10.592c-.384 0-.96 0-1.408-.064-.8-.096-1.088-.48-1.088-1.504v-7.872c.448-.032.608-.032 1.632-.032 1.472 0 5.504.096 5.504 4.672 0 3.616-2.016 4.768-4.64 4.8z" fill="#000" fill-rule="nonzero"/>
                        </g>
                    </svg>
                </a>
            </div>
            <div class="float-right border-2 border-black px-2 py-1 font-serif text-xl w-2/5">Card Total: {{  $deck->equipmentTotal() + $deck->otherTotal() }}</div>
        </div>
    </body>
</html>