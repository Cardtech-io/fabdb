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
            let colours = {
                'draft': 'bg-purple-500',
                'sealed': 'bg-blue-500',
                'team-sealed': 'bg-green-500',
            };

            let formats = {
                'draft': 'Draft',
                'sealed': 'Solo',
                'team-sealed': 'Team',
            };

            return {
                colour: colours[this.format],
                text: formats[this.format],
            }
        }
    }
</script>
