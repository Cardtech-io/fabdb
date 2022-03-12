<?php
use FabDB\Domain\Cards\Cards;
?>
<tr>
    <td class="px-2 py-1 border border-gray-500 font-serif text-center" width="40">
        {!! object_get(Arr::get($equipment, "0.$key"), 'pivot.total', '&nbsp;') !!}
    </td>
    <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">
        {!! object_get(Arr::get($equipment, "0.$key"), 'name', '&nbsp;') !!}
    </td>
    <td class="px-2 py-1 border border-gray-500 font-serif text-center" width="40">
        {!! object_get(Arr::get($equipment, "1.$key"), 'pivot.total', '&nbsp;') !!}
    </td>
    <td class="px-2 py-1 border @if ($key == 4) pdf-totals-right @else border-gray-500 @endif font-serif" width="30%">
        {!! object_get(Arr::get($equipment, "1.$key"), 'name', '&nbsp;') !!}
    </td>
    <td class="px-2 py-1 border @if ($key == 3) pdf-totals-bottom @endif @if ($key == 4) border-black @else border-gray-500 @endif font-serif text-center" width="40">
        @if ($key == 4)
            {{ (new Cards($equipment->flatten()))->total() }}
        @else
            {!! object_get(Arr::get($equipment, "2.$key"), 'pivot.total', '&nbsp;') !!}
        @endif
    </td>
    <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">
        @if ($key == 4)
            Total weapons / equipment
        @else
            {!! object_get(Arr::get($equipment, "2.$key"), 'name', '&nbsp;') !!}
        @endif
    </td>
</tr>
