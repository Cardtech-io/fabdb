<template>
    <div>
        <div class="flex bg-gray-300 dark:bg-gray-500 dark:text-gray-200 rounded-t-large overflow-hidden space-x-px">
            <editor-button :editor="editor" method="bold" class="font-bold">B</editor-button>
            <editor-button :editor="editor" method="italic" class="italic">I</editor-button>
            <editor-button :editor="editor" method="underline" class="underline">U</editor-button>
        </div>
        <div class="input rounded-b-lg focus:outline-none py-2 px-4">
            <editor-content :editor="editor"/>
        </div>
    </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import EditorButton from "./EditorButton.vue";
import StarterKit from '@tiptap/starter-kit';
import {Underline} from "@tiptap/extension-underline";

export default {
    props: {
        value: {
            type: String,
            default: '',
        },
    },

    components: {
        EditorButton,
        EditorContent,
    },

    data() {
        return {
            editor: null,
        }
    },

    watch: {
        value(value) {
            // HTML
            const isSame = this.editor.getHTML() === value

            // JSON
            // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

            if (isSame) {
                return
            }

            this.editor.commands.setContent(value, false)
        },
    },

    mounted() {
        this.editor = new Editor({
            content: this.value,
            extensions: [
                StarterKit,
                Underline,
            ],
            onUpdate: () => {
                // HTML
                this.$emit('input', this.editor.getHTML())

                // JSON
                // this.$emit('input', this.editor.getJSON())
            },
        })
    },

    beforeDestroy() {
        this.editor.destroy()
    },
}
</script>
