<template>
    <button class="flex-1 border-r border-gray-200 py-2 px-1 md:px-2" :class="selected === type ? 'bg-gray-800 text-white' : 'hover:bg-secondary hover:text-white'" title="All">
        <icon :size="6" :box="24"  class="mx-auto">
            <slot></slot>
        </icon>
    </button>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                required: true
            },

            selected: {
                type: String,
                required: true
            }
        }
    }
</script>
