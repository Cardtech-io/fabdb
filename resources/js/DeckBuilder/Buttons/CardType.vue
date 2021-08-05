<template>
    <button class="flex-1 border-r border-gray-200 py-2 px-1 md:px-2" :class="selected === type ? 'bg-gray-800 text-white' : 'hover:bg-secondary hover:text-white'" :title="text()">
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
                type: String,
                required: true
            }
        },

        methods: {
            text() {
                return this.type === '' ? 'All' : this.ucfirst(this.type);
            }
        }
    }
</script>
