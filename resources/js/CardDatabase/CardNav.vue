<template>
    <router-link :to="'/cards/' + to" class="w-1/2 appearance-none block w-full py-2 px-4" :disabled="to" :class="classes">
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        props: ['to'],

        computed: {
            classes() {
                return this.to ? 'button-primary' : 'button-disabled';
            }
        }
    };
</script>
