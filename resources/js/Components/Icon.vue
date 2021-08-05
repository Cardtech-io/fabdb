<template>
    <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" class="fill-current" :class="'h-' + size">
        <slot></slot>
    </svg>
</template>

<script>
    export default {
        props: {
            size: {
                type: Number,
                required: true
            },

            box: {
                type: Number,
                default: 20
            }
        },

        computed: {
            viewBox() {
                return '0 0 '+this.box+' '+this.box;
            }
        }
    };
</script>
