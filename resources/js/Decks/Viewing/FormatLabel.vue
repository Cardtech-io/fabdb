<template>
    <span class="font-serif uppercase" :class="formatColours()" v-if="format">{{name()}}</span>
</template>

<script>
    export default {
        props: {
            format: {
                type: String,
                required: true
            }
        },

        methods: {
            formatColours() {
                switch (this.format) {
                    case 'blitz':
                        return 'bg-orange-500 text-white';
                    case 'constructed':
                        return 'bg-blue-400 text-white';
                    case 'open':
                        return 'bg-gray-500 text-white';
                }
            },

            name() {
                return this.$settings.game.decks.formats[this.format];
            }
        }
    };
</script>
