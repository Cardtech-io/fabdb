<template>
    <span class="inline-block cursor-help text-white text-center text-sm" :class="classes()" :title="text()" style="width: 20px; height: 20px">
        {{ rarity }}
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
                let classes = this.$settings.game.rarities[this.rarity].toLowerCase().replace(' ', '')+' ';

                if (this.rarity === 'F') {
                    classes += 'diamond';
                } else {
                    classes += 'rounded-full';
                }

                return classes;
            },

            text() {
                return this.$settings.game.rarities[this.rarity];
            }
        }
    };
</script>
