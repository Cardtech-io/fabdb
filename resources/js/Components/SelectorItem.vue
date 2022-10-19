<template>
    <button @click="select()" class="w-full text-base text-left px-2 py-1" :class="value === selected ? 'bg-secondary text-white' : 'hover:bg-secondary hover:text-white'">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            selected: {
                required: true
            },

            value: {
                defaulit: ''
            }
        },

        methods: {
            select() {
                this.$parent.select(this.value);
                this.$emit('item-selected', this.value);
            }
        }
    }
</script>
