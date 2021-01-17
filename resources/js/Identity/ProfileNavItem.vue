<template>
    <router-link :to="to" class="block p-2 px-3 sm:rounded sm:mr-2" :class="classes()">
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        props: {
            to: {
                required: true,
                type: Object
            }
        },

        methods: {
            classes() {
                return this.$route.name === this.to.name ? 'bg-gray-800': 'sm:bg-semi-black hover:bg-gray-800';
            }
        }
    }
</script>
