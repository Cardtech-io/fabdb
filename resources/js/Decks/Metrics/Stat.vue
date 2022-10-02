<template>
    <li class="block w-full flex mb-px space-x-px">
        <div class="w-3/4 bg-gray-200 dark:bg-gray-700 p-2 py-1" :class="{ 'rounded-tl-lg': top(), 'rounded-bl-lg': bottom() }">{{ text }}</div>
        <div class="w-1/4 bg-gray-200 dark:bg-gray-700 py-1 text-center" :class="{ 'rounded-tr-lg': top(), 'rounded-br-lg': bottom() }">{{ value }}</div>
    </li>
</template>

<script>
    export default {
        props: ['text', 'value', 'position'],

        methods: {
            bottom() {
                return this.position === 'bottom' || this.position === 'both';
            },

            top() {
                return this.position === 'top' || this.position === 'both';
            }
        }
    }
</script>
