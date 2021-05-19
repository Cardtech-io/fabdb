<template>
    <div :class="colour" class="inline-block text-white rounded px-3 py-1 text-sm">
        {{text}}
    </div>
</template>

<script>
    export default {
        props: {
            format: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                colour: this.format === 'sealed' ? 'bg-blue-500' : 'bg-green-500',
                text: this.format === 'sealed' ? 'Solo' : 'Team',
            }
        }
    }
</script>
