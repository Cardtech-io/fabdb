<template>
    <span class="font-serif uppercase" :class="labelColours()" v-if="label">{{name()}}</span>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                required: true
            }
        },

        methods: {
            labelColours() {
                switch (this.label) {
                    case 'janky':
                        return 'bg-yellow-500 text-black';
                    case 'casual':
                        return 'bg-blue-300 text-black';
                    case 'competitive':
                        return 'bg-gray-800 text-white';
                    case 'meme':
                        return 'bg-pink-600 text-white';
                }
            },

            name() {
                return this.$settings.game.decks.labels[this.label];
            }
        }
    };
</script>
