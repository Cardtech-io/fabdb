<template>
    <button
        type="button"
        @click="editor.chain().focus()[methodName()]().run()"
        class="flex items-center justify-center h-8 w-8 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-white text-sm"
        :class="{'bg-gray-200 dark:bg-gray-700 text-black dark:text-white': editor && editor.isActive(method)}"
    >
        <slot></slot>
    </button>
</template>

<script>
import Strings from "../Utilities/Strings";

export default {
    props: {
        editor: {
            required: true
        },
        method: {
            type: String,
            required: true
        }
    },

    mixins: [Strings],

    methods: {
        methodName() {
            return 'toggle'+this.ucfirst(this.method);
        }
    }
}
</script>
