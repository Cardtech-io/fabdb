<template>
    <li class="block w-full flex mb-1">
        <div class="w-3/4 bg-gray-100 px-4 py-2 mr-1" :class="{ 'rounded-tl-lg': position == 'top', 'rounded-bl-lg': position == 'bottom' }">{{ text }}</div>
        <div class="w-1/4 bg-gray-100 px-4 py-2 text-center" :class="{ 'rounded-tr-lg': position == 'top', 'rounded-br-lg': position == 'bottom' }">{{ value }}</div>
    </li>
</template>

<script>
    export default {
        props: ['text', 'value', 'position']
    }
</script>
