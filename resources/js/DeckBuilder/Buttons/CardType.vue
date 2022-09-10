<template>
    <button class="flex-1 border-r border-gray-200 dark:border-gray-600 py-2 px-1 md:px-2" :class="isSelected(type) ? 'bg-gray-800 text-white' : 'hover:bg-secondary hover:text-white'" :title="text()">
        <icon :size="6" :box="24"  class="mx-auto">
            <slot></slot>
        </icon>
    </button>
</template>

<script>
    import Strings from "../../Utilities/Strings";

    export default {
        mixins: [Strings],

        props: {
            type: {
                type: String,
                required: true
            },

            selected: {
                type: Array,
                required: true
            }
        },

        methods: {
            isSelected(cardType) {
                return this.selected.indexOf(cardType) !== -1;
            },

            text() {
                return this.type === '' ? 'All' : this.ucfirst(this.type);
            }
        }
    }
</script>
