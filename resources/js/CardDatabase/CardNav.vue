<template>
    <router-link :to="'/cards/' + to" class="w-1/2 appearance-none block w-full mt-2 rounded-lg py-3 px-4 mr-2" :disabled="to" :class="classes">
        {{ text }}
    </router-link>
</template>

<script>
    export default {
        props: ['text', 'to'],

        computed: {
            classes() {
                return this.to ? 'button-primary' : 'button-disabled';
            }
        }
    };
</script>
