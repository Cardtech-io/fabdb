<template>
    <span class="text-center text-sm" :class="classes()">
        {{ text() }}
    </span>
</template>

<script>
    export default {
        props: {
            rarity: {
                required: true,
                type: String
            }
        },

        methods: {
            classes() {
                return 'text-' + this.$settings.game.rarities[this.rarity].toLowerCase().replace(' ', '')+' ';
            },

            text() {
                return this.$settings.game.rarities[this.rarity];
            }
        }
    };
</script>
