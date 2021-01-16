<template>
    <router-link :to="to" class="py-2 px-3 rounded" :class="classes()">
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
                return this.$route.name === this.to.name ? 'bg-gray-800': 'bg-semi-black hover:bg-gray-800';
            }
        }
    }
</script>
