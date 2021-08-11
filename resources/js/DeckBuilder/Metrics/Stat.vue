<template>
    <li class="block w-full flex mb-px space-x-px">
        <div class="w-3/4 bg-white p-2" :class="{ 'rounded-tl-lg': top(), 'rounded-bl-lg': bottom() }">{{ text }}</div>
        <div class="w-1/4 bg-white py-2 text-center" :class="{ 'rounded-tr-lg': top(), 'rounded-br-lg': bottom() }">{{ value }}</div>
    </li>
</template>

<script>
    export default {
        props: ['text', 'value', 'position'],

        methods: {
            bottom: function() {
                return this.position === 'bottom' || this.position === 'both';
            },

            top: function() {
                return this.position === 'top' || this.position === 'both';
            }
        }
    }
</script>
