<template>
    <icon :size="6">
        <path d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zM10 2a8 8 0 100 16 8 8 0 000-16zm-.7 10.54L5.75 9l1.41-1.41L10 10.4l2.83-2.82L14.24 9 10 13.24l-.7-.7z" v-if="open" />
        <path d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm10 8a8 8 0 100-16 8 8 0 000 16zm.7-10.54L14.25 11l-1.41 1.41L10 9.6l-2.83 2.8L5.76 11 10 6.76l.7.7z" v-else/>
    </icon>
</template>

<script>
    import Icon from "../../Components/Icon.vue";

    export default {
        props: {
            open: {
                type: Boolean,
                required: true
            }
        },

        components: { Icon }
    }
</script>
