<template>
    <button class="appearance-none block w-full bg-orange-700 text-white rounded-lg py-3 px-4 leading-tight focus:outline-none hover:bg-orange-500" @click="handleClick()">
        {{ text }}
    </button>
</template>

<script>
    export default {
        props: ['text', 'handler', 'value'],

        methods: {
            handleClick: function() {
                if (this.handler) {
                    this.handler(this.value);
                }
            }
        }
    };
</script>