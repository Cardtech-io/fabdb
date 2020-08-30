<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current" :class="'h-' + size">
        <slot></slot>
    </svg>
</template>

<script>
    export default {
        props: {
            size: {
                type: Number,
                required: true
            }
        }
    };
</script>
