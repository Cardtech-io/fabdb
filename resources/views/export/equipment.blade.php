<?php $weapon = $deck->weapons()->get($key); ?>
<?php $equipment = $deck->equipment()->get($key); ?>
<?php $finalEquipment = $deck->equipment()->get($key + 5); ?>
<tr>
    <td class="px-2 py-1 border border-gray-500 font-serif text-center" width="40">
        {!! object_get($weapon, 'total', '&nbsp;') !!}
    </td>
    <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">
        {!! object_get($weapon, 'name', '&nbsp;') !!}
    </td>
    <td class="px-2 py-1 border border-gray-500 font-serif text-center" width="40">
        {!! object_get($equipment, 'total', '&nbsp;') !!}
    </td>
    <td class="px-2 py-1 border @if ($key == 4) pdf-totals-right @else border-gray-500 @endif font-serif" width="30%">
        {!! object_get($equipment, 'name', '&nbsp;') !!}
    </td>
    <td class="px-2 py-1 border @if ($key == 3) pdf-totals-bottom @endif @if ($key == 4) border-black @else border-gray-500 @endif font-serif text-center" width="40">
        @if ($key == 4)
            {{ $deck->equipmentTotal() }}
        @else
            {!! object_get($finalEquipment, 'total', '&nbsp;') !!}
        @endif
    </td>
    <td class="px-2 py-1 border border-gray-500 font-serif" width="30%">
        @if ($key == 4)
            Total weapons / equipment
        @else
            {!! object_get($finalEquipment, 'name', '&nbsp;') !!}
        @endif
    </td>
</tr>