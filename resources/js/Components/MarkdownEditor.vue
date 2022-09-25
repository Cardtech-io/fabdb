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

<style lang="css">
/* Basic editor styles */
.ProseMirror > * + * {
    margin-top: 0.75em;
}

.ProseMirror ul, .ProseMirror ol {
    padding: 0 1rem;
}

.ProseMirror h1 {
    @apply text-4xl;
}

.ProseMirror h2 {
    @apply text-2xl;
}

.ProseMirror h3 {
    @apply text-xl;
}
.ProseMirror h4 {
    @apply text-lg;
}

.ProseMirror hr {
    margin: 1rem 0;
}

.ProseMirror blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
}
</style>
