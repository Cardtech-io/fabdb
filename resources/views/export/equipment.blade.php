<?php $weapon = $deck->weapons()->get($key); ?>
<?php $equipment = $deck->equipment()->get($key); ?>
<tr>
    <td class="p-2 border border-gray-500 font-serif text-center" width="40">{!! object_get($weapon, 'total', '&nbsp;') !!}</td>
    <td class="p-2 border border-gray-500 font-serif" width="30%">{!! object_get($weapon, 'name', '&nbsp;') !!}</td>
    <td class="p-2 border border-gray-500 font-serif text-center" width="40">{!! object_get($equipment, 'total', '&nbsp;') !!}</td>
    <td class="p-2 border @if ($key == 4) pdf-totals-right @else border-gray-500 @endif font-serif" width="30%">{!! object_get($equipment, 'name', '&nbsp;') !!}</td>
    <td class="p-2 border @if ($key == 3) pdf-totals-bottom @endif @if ($key == 4) border-black @else border-gray-500 @endif font-serif text-center" width="40">@if ($key == 4) {{ $deck->equipmentTotal() }} @endif</td>
    <td class="p-2 border border-gray-500 font-serif" width="30%">@if ($key == 4)Total weapons / equipment @endif</td>
</tr>